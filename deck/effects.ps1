# Adds the effects to the packed deck in PowerPoint itself, then saves with the fonts embedded:
#   (the Morph transitions are already in the file, written by pack_pptx.py)
#   - entrance animations from effects.json, all automatic (no clicking through each sticker)
# Called by build-deck.mjs:  effects.ps1 <raw.pptx> <effects.json> <out.pptx>
param([string]$Raw, [string]$Plan, [string]$Out)
$ErrorActionPreference = 'Stop'

$steps = Get-Content $Plan -Raw -Encoding UTF8 | ConvertFrom-Json
$app = New-Object -ComObject PowerPoint.Application
$deck = $app.Presentations.Open($Raw, $false, $false, $false)
try {
  $total = 0
  for ($i = 1; $i -le $deck.Slides.Count; $i++) {
    $slide = $deck.Slides.Item($i)
    foreach ($s in @($steps[$i - 1])) {
      $trigger = if ($s.trigger -eq 'with') { 2 } else { 3 }  # msoAnimTriggerWithPrevious / AfterPrevious
      $fx = $slide.TimeLine.MainSequence.AddEffect($slide.Shapes.Item($s.shape), [int]$s.effect, 0, $trigger)
      $fx.Timing.Duration = [double]$s.duration
      $fx.Timing.TriggerDelayTime = [double]$s.delay
      $total++
    }
  }
  $deck.SaveAs($Out, 24, -1)  # ppSaveAsOpenXMLPresentation, embed TrueType fonts
  $morph = $deck.Slides.Item(2).SlideShowTransition.EntryEffect
  Write-Output "Added $total entrance animations (slide transition id $morph, set by pack_pptx.py); saved $Out"
} finally {
  $deck.Close()
  $app.Quit()
}
