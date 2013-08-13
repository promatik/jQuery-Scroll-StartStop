jQuery-Scroll-StartStop v1.0
============================

## Description
Scroll Start Stop for jQuery, based in the work of James Padolsey
In this version I added the hability to track the scroll bar, scrollStop is only fired on mouseup of the scrollbar

## Demo
[Demo Scroll StartStop](http://promatik.no.sapo.pt/github/scroll-startstop/)

## Download
* [Master branch](https://github.com/promatik/jQuery-Scroll-StartStop/archive/master.zip)

## Setup
* How to setup the plugin on your website:

```html
<script src="jquery-scroll-startstop.min.js"></script>
```

```javascript
$(window).on('scrollstart', function(){
  console.log("scrollstart");
}).on('scrollstop', function(){
  console.log("scrollstop");
});
```

## Features
* **ScrollStop at scrollbar drop**  
  Beside everything that is previously done with the original version of this plugin, the stopscroll event is now fired only when the user drop the scrollbar (in the case he is scrolling with scrollbar) 

## Requirements
* [jQuery](http://jquery.com/) v. 1.6+

## Browsers

### Desktop browsers
The Scroll StartStop plugin is supported by the following minimal versions:

* Google Chrome
* Apple Safari 4.0+
* Mozilla Firefox 3.0+
* Opera 11.0+
* Microsoft Internet Explorer 6.0+ (partially supported - url parse only)

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
