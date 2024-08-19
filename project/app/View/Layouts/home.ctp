<?php
// will be loaded after `title` tag
// $requireFiles1 = [
// 	'path/to/php/file.php',
// ];

// will be loaded before `head` closed
$requireFiles2 = [
	// APP .'View/Layouts/head/them-color.ctp',
];
// $requireFiles1 = [
// 	'path/to/php/file.php',
// ];
// will be loaded before `html` closed
// $requireFiles9 = [
// 	'path/to/php/file.php',
// ];

$bodyAttributes = [
	'class' => 'home',
];

$cssLinks = [
//   'main_rtl_home',
  'styles/output'
];

require XCMS_PATH . '/core-common/app/View/Layouts/_v2/head.ctp';
?>


<div class="section01 bg-red-800">

<p class="text-black">item1</p>
<p>item2</p>
<p>item3</p>

</div>