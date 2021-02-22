$(function () {
  let $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      $video.load();
    }
  });
});

// модуль требует подключения jquery в html:
// <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>