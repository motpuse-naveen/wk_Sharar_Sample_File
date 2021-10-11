var jq = $.noConflict();
jq(document).ready(function(){
  jq(".video-Holder").hide();
  jq(".vidFrm1").click(function(){
    jq(this).nextAll(".video-Holder").first().toggle(500, function (){
      jq("video").get(0).pause();
    });
  });

  jq(".vidFrm2").click(function(){
    jq(this).prevAll(".video-Holder").first().toggle(500, function (){
      jq("video").get(0).pause();
    });
  });
});