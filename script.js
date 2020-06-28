/*
List of available status:
1. fl_fansVisible       仅粉丝可见
2. fl_friendVisible     仅好友圈可见
3. fl_personalVisible   仅自己可见
4. feed_list_delete     删除微博

To use one of these status, modify the "action-type" on both line 22 & line 27
*/

var s = document.createElement("script");

s.setAttribute(
  "src",

  "https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js"
);

s.onload = function () {
  setInterval(function () {
    // Check if there is any posts that can be set to "PersonalVisible"
    if (!$('a[action-type="fl_personalVisible"][action-data="visible=1"]')[0]) {
        // If there is none, click the "next page" button
        $('a[class="page next S_txt1 S_line1"]')[0].click();
    } else {
        // If there is any, set them to "PersonalVisible"
        $('a[action-type="fl_personalVisible"][action-data="visible=1"]')[0].click();
        $('a[action-type="ok"]')[0].click();
    }
    // Scroll to the bottom to see the "next page" button
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  }, 1000);
};

document.head.appendChild(s);
