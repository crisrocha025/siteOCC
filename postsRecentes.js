function bsrpGallery(root) {
var entries = root.feed.entry || [];
var html = ['<div class="bsrp-gallery nopin" >'];
for (var i = 0; i < entries.length; ++i) {
var post = entries[i];
var postTitle = post.title.$t;
var orgImgUrl = post.media$thumbnail ? post.media$thumbnail.url : 'https://lh5.googleusercontent.com/-iaKQ-tiz6KE/VPyO2GnMRXI/AAAAAAAADrc/si7De0SoFO0/s300/semimagem1.png';
var newImgUrl = orgImgUrl.replace('s72-c', 's' + bsrpg_thumbSize + '-c');
var links = post.link || [];
for (var j = 0; j < links.length; ++j) {
if (links[j].rel == 'alternate') break;
}
var postUrl = links[j].href;
var imgTag = '<img src="' + newImgUrl + '" width="' + bsrpg_thumbSize + '" height="' + bsrpg_thumbSize + '"/>';
var pTitle = bsrpg_showTitle ? '<span class="ptitle">' + postTitle + '</span>' : '';
var item = '<a href="' + postUrl + '" title="' + postTitle + '">' + imgTag + pTitle + '</a>';
html.push('<div class="bs-item">', item, '</div>');
}
html.push('</div>');
document.write(html.join(""));
}
hoje = new Date()
numposts = 1;
var bsrpg_thumbSize = 220;
var bsrpg_showTitle = true;
document.write("<script src=\"https://www.ocodigocris.com/feeds/posts/default?start-index="+numposts+"&max-results= 4&orderby=published&alt=json-in-script&callback=bsrpGallery\"><\/script>");
