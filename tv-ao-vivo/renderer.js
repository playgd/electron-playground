;(function () {
  const $ = (el, context = document) => [...context.querySelectorAll(el)]
  const $buttons = $('[data-js="button"]')
  const $iframe = $('[data-js="iframe"]')[0]
  const iframeSrc = $iframe.getAttribute('src')

  const channels = {
    sbt: 'http://fast.player.liquidplatform.com/pApiv2/embed/8fcdc5f0f8df8d4de56b22a2c6660470??streamName=sbtabr&primaryLive=[http://liveabr2.sambatech.com.br/abr/sbtabr_8fcdc5f0f8df8d4de56b22a2c6660470/livestreamabrsbtbkp.m3u8]&backupLive=[http://liveabr2.sambatech.com.br/abr/sbtabr_8fcdc5f0f8df8d4de56b22a2c6660470/livestreamabrsbt.m3u8]&hasFacebook=false&hasTwitter=false&title=SBT Ao Vivo',
    record: iframeSrc.replace(/{channel}/, 'record'),
    band: iframeSrc.replace(/{channel}/, 'band')
  }

  const updateChannel = (channel) => {
    $iframe.setAttribute('src', channels[channel])
  }

  const handleClick = (e) => {
    const channel = e.currentTarget.getAttribute('data-channel')
    console.log('channel:', channel)
    updateChannel(channel)
  }

  $buttons.forEach(($button) => {
    $button.addEventListener('click', handleClick, false)
  })

  // Set first channel as Record
  updateChannel('record')
})()
