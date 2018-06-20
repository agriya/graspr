angular.module('templates-app', ['themes/graspr/views/common/404.tpl.html', 'themes/graspr/views/common/footer.tpl.html', 'themes/graspr/views/common/header.tpl.html', 'themes/graspr/views/contactUs/contactUs.tpl.html', 'themes/graspr/views/courses/addCourse.tpl.html', 'themes/graspr/views/courses/courses.tpl.html', 'themes/graspr/views/courses/directives/amountDisplay.tpl.html', 'themes/graspr/views/courses/directives/categories.tpl.html', 'themes/graspr/views/courses/directives/courseCategory.tpl.html', 'themes/graspr/views/courses/directives/homeCourse.tpl.html', 'themes/graspr/views/courses/directives/manageCourseNavbar.tpl.html', 'themes/graspr/views/courses/directives/onlineLessons.tpl.html', 'themes/graspr/views/courses/directives/paymentButtons.tpl.html', 'themes/graspr/views/courses/directives/relatedCoursesByCategory.tpl.html', 'themes/graspr/views/courses/learnCourse.tpl.html', 'themes/graspr/views/courses/learning.tpl.html', 'themes/graspr/views/courses/manageCourse.tpl.html', 'themes/graspr/views/courses/manageCourseBasics.tpl.html', 'themes/graspr/views/courses/manageCourseCurriculum.tpl.html', 'themes/graspr/views/courses/manageCourseDangeZone.tpl.html', 'themes/graspr/views/courses/manageCourseFeedback.tpl.html', 'themes/graspr/views/courses/manageCourseGoals.tpl.html', 'themes/graspr/views/courses/manageCourseHelp.tpl.html', 'themes/graspr/views/courses/manageCourseImage.tpl.html', 'themes/graspr/views/courses/manageCoursePrice.tpl.html', 'themes/graspr/views/courses/manageCoursePromoVideo.tpl.html', 'themes/graspr/views/courses/manageCourseSummary.tpl.html', 'themes/graspr/views/courses/search.tpl.html', 'themes/graspr/views/courses/teaching.tpl.html', 'themes/graspr/views/courses/viewCourse.tpl.html', 'themes/graspr/views/courses/wishlist.tpl.html', 'themes/graspr/views/home/home.tpl.html', 'themes/graspr/views/pages/pages.tpl.html', 'themes/graspr/views/users/activation.tpl.html', 'themes/graspr/views/users/change_password.tpl.html', 'themes/graspr/views/users/directives/profileImage.tpl.html', 'themes/graspr/views/users/directives/profileName.tpl.html', 'themes/graspr/views/users/forgot_password.tpl.html', 'themes/graspr/views/users/login.tpl.html', 'themes/graspr/views/users/logout.tpl.html', 'themes/graspr/views/users/signup.tpl.html', 'themes/graspr/views/users/subscribe_plans.tpl.html', 'themes/graspr/views/users/user_profile.tpl.html']);

angular.module("themes/graspr/views/common/404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/common/404.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"tex-center\">	\n" +
    "		<h3>404 Page Not Found</h3>\n" +
    "	</div>		\n" +
    "</div>\n" +
    "");
}]);

angular.module("themes/graspr/views/common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/common/footer.tpl.html",
    "<!--footer section start-->\n" +
    "<footer id=\"footer\" class=\"footer\">\n" +
    "    <div class=\"container\">\n" +
    "	<div class=\"well-lg hidden-xs\"></div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-5 col-xs-12 navbar-btn\">\n" +
    "          <ul class=\"list-unstyled\">\n" +
    "            <li><a href=\"#!/\" title=\"{{$root.settings['site.name']}}\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"/></a></li>\n" +
    "            <li>\n" +
    "              <p class=\"navbar-btn\">{{$root.settings['site.name']}} {{'provides universal access to the world\\'s best education, partnering with top universities and organizations to offer courses for anyone to take, for free.'|translate}}</p>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7 navbar-btn\">\n" +
    "          <ul class=\"list-unstyled col-sm-3 col-xs-6\">\n" +
    "            <li>\n" +
    "              <h6 class=\"h5 initialism\">{{'Company'|translate}}</h6>\n" +
    "            </li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'About'|translate}}\" href=\"#!/page/about\">{{'About'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'People'|translate}}\" href=\"#!/page/people\">{{'People'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Leadership'|translate}}\" href=\"#!/page/leadership\">{{'Leadership'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Careers'|translate}}\" href=\"#!/page/careers\">{{'Careers'|translate}}</a></li>\n" +
    "          </ul>\n" +
    "          <ul class=\"list-unstyled col-sm-3 col-xs-6\">\n" +
    "            <li>\n" +
    "              <h6 class=\"h5 initialism\">{{'Friends'|translate}}</h6>\n" +
    "            </li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Partners'|translate}}\" href=\"#!/page/partners\">{{'Partners'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Community'|translate}}\" href=\"#!/page/community\">{{'Community'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Programs'|translate}}\" href=\"#!/page/programs\">{{'Programs'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a class=\"text-muted\" title=\"{{'Developers'|translate}}\" href=\"#!/page/developers\">{{'Developers'|translate}}</a></li>\n" +
    "            \n" +
    "          </ul>\n" +
    "          <ul class=\"list-unstyled col-sm-3 col-xs-6\">\n" +
    "            <li>\n" +
    "              <h6 class=\"h5 initialism\">{{'Connect'|translate}}</h6>\n" +
    "            </li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.facebook']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.facebook']}}\" target=\"_blank\" class=\"text-muted\">{{'Facebook'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.twitter']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.twitter']}}\" target=\"_blank\" class=\"text-muted\">{{'Twitter'|translate}}</a></li>\n" +
    "			<li  ng-show=\"$root.settings['social_networks.google_plus']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.google_plus']}}\" target=\"_blank\" class=\"text-muted\">{{'Google plus'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.linkedin']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.linkedin']}}\" target=\"_blank\" class=\"text-muted\">{{'Linkedin'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.foursquare']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.foursquare']}}\" target=\"_blank\" class=\"text-muted\">{{'Foursquare'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.pinterest']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.pinterest']}}\" target=\"_blank\" class=\"text-muted\">{{'Pinterest'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.flickr']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.flickr']}}\" target=\"_blank\" class=\"text-muted\">{{'Flickr'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.instagram']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.instagram']}}\" target=\"_blank\" class=\"text-muted\">{{'Instagram'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.tumblr']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.tumblr']}}\" target=\"_blank\" class=\"text-muted\">{{'Tumblr'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.youtube']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.youtube']}}\" target=\"_blank\" class=\"text-muted\">{{'Youtube'|translate}}</a></li>\n" +
    "			<li ng-show=\"$root.settings['social_networks.vimeo']\" class=\"navbar-btn\"><a href=\"{{$root.settings['social_networks.vimeo']}}\" target=\"_blank\" class=\"text-muted\">{{'Vimeo'|translate}}</a></li>\n" +
    "          </ul>\n" +
    "          <ul class=\"list-unstyled col-sm-3 col-xs-6\">\n" +
    "            <li>\n" +
    "              <h6 class=\"h5 initialism\">{{'More'|translate}}</h6>\n" +
    "            </li>\n" +
    "            <li class=\"navbar-btn\"><a href=\"#!/page/terms\" title=\"{{'Terms'|translate}}\" class=\"text-muted\">{{'Terms'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a href=\"#!/page/privacy-policy\" title=\"{{'Privacy'|translate}}\" class=\"text-muted\">{{'Privacy Policy'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a href=\"#!/page/help\" title=\"{{'Help'|translate}}\" class=\"text-muted\">{{'Help'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a href=\"#!/page/press\" title=\"{{'Press'|translate}}\" class=\"text-muted\">{{'Press'|translate}}</a></li>\n" +
    "            <li class=\"navbar-btn\"><a href=\"#!/contactus\" title=\"{{'Contact'|translate}}\" class=\"text-muted\">{{'Contact'|translate}}</a></li>\n" +
    "			<li class=\"navbar-btn\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Translations') > -1\">{{'Translate'|translate}}</li>\n" +
    "			<li oc-lazy-load=\"$root.loadTranslations\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Translations') > -1\"><div ng-translate-language-select></div></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<p class=\"navbar-btn\">© {{cdate | date:'yyyy'}} <a href=\"#!\" title=\"{{$root.settings['site.name']}}\" class=\"text-muted\">{{$root.settings['site.name']}}</a>, {{'All rights reserved.'| translate}} <a href=\"http://graspr.demo.agriya.com/\" target=\"_blank\" title=\"{{'Powered by Graspr'| translate}}\"><img src=\"assets/img/graspr.png\" alt=\"[Image: {{'Powered by Graspr'| translate}}]\" title=\"{{'Powered by Graspr'| translate}}\"></a> ,{{' v'|translate}}{{$root.settings['site.version']}} {{'made in '|translate}}&nbsp;<a href=\"http://www.agriya.com/\" target=\"_blank\" title=\"{{'Agriya Web Development'| translate}}\"><img src=\"assets/img/powered-by-agriya.png\" alt=\"[Image: {{'Agriya Web Development'| translate}}]\" title=\"{{'Agriya Web Development'| translate}}\"></a>  <a href=\"http://www.cssilize.com/\" target=\"_blank\" title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\"> <img src=\"assets/img/cssilize.png\" alt=\"[Image: {{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}]\" title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\" > </a></p>\n" +
    "		</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "<!--footer section end-->	");
}]);

angular.module("themes/graspr/views/common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/common/header.tpl.html",
    "<header id=\"header\" class=\"clearfix navbar-default\">\n" +
    "	<div class=\"clearfix\">\n" +
    "		<!-- If user not logged in -->\n" +
    "		<div class=\"container\" ng-show=\"!isAuth\">\n" +
    "			<div class=\"navbar-header navbar-btn list-group-item-text\">\n" +
    "				<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n" +
    "				<h1 class=\"navbar-btn clearfix list-group-item-heading\"><a href=\"#!/\" title=\"{{$root.settings['site.name']}}\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"/></a></h1>\n" +
    "			</div>\n" +
    "			<nav class=\"collapse navbar-collapse\">\n" +
    "				<ul class=\"nav navbar-nav navbar-right\">\n" +
    "					<li ng-show=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><a href=\"#!users/login\" title=\"{{'Become an Instructor'|translate}}\" class=\"text-muted navbar-btn\">{{'Become an Instructor'|translate}}</a></li>\n" +
    "					<li><a ng-href=\"#!/users/login\"  ng-click=\"modalLogin($event)\" title=\"{{'Log In'|translate}}\" class=\"text-muted navbar-btn\">{{'Log In'|translate}}</a></li>\n" +
    "					<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\"><a ng-href=\"#!/users/signup\" ng-click=\"modalSignup($event)\" title=\"{{'Sign Up'|translate}}\" class=\"text-muted navbar-btn\">{{'Sign Up'|translate}}</a></li>\n" +
    "					<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#!/subscribe/plans\"  title=\"{{'Pricing'|translate}}\" class=\"text-muted navbar-btn\">{{'Pricing'|translate}}</a></li>\n" +
    "				</ul>\n" +
    "			</nav>\n" +
    "		</div>\n" +
    "		<div class=\"container\" ng-show=\"isAuth\">\n" +
    "			<div class=\"navbar-header navbar-btn list-group-item-heading\">\n" +
    "				<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n" +
    "				<h1 class=\"navbar-btn clearfix list-group-item-heading list-group-item-text\"><a href=\"#!/courses/search\" title=\"{{$root.settings['site.name']}}\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive navbar-btn\"/></a></h1>\n" +
    "			</div>\n" +
    "			<nav class=\"collapse navbar-collapse\">\n" +
    "				<div class=\"clearfix navbar-btn col-sm-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-2\">\n" +
    "					<form class=\"form-inline navbar-btn\" method=\"post\">\n" +
    "						<div class=\"input-group\"> \n" +
    "							<span class=\"input-group-btn\">\n" +
    "								<a class=\"btn btn-default\" title=\"{{'Catalog'|translate}}\" href=\"#!/courses\"><span class=\"text-muted\"><i class=\"fa fa-list-ul\"></i> {{'Catalog'|translate}}</span></a>\n" +
    "							</span>\n" +
    "							<input type=\"search\" class=\"form-control\" placeholder=\"{{'Search Courses'|translate}}\" ng-model=\"hsearchVal\" ng-keyup=\"$event.keyCode == 13 ? goToState('CourseSearch', {q: hsearchVal}) : null\" />\n" +
    "							<span class=\"input-group-btn\">\n" +
    "								<a class=\"btn btn-default\" ui-sref=\"CourseSearch({q:hsearchVal})\"><i class=\"fa fa-search\"></i></a>\n" +
    "							</span> \n" +
    "						</div>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "				<ul class=\"nav navbar-nav navbar-right\">\n" +
    "					<li ng-show=\"$root.auth.providertype === 'admin'\"><a href=\"ag-admin\" title=\"{{'Admin Dashboard'|translate}}\" class=\"text-muted navbar-btn\">{{'Admin Dashboard'|translate}}</a></li>\n" +
    "					<li ng-show=\"model.userDetails.is_teacher === 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/my-courses/teaching\" title=\"{{'Instructor Dashboard'|translate}}\" class=\"text-muted navbar-btn\">{{'Instructor Dashboard'|translate}}</a></li>\n" +
    "					<li ng-show=\"model.userDetails.is_teacher !== 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/courses/add\" title=\"{{'Become an Instructor'|translate}}\" class=\"text-muted navbar-btn\">{{'Become an Instructor'|translate}}</a></li>					\n" +
    "					<li class=\"dropdown dropdown-img navbar-btn\">\n" +
    "						<a ng-if=\"$root.auth.user_image_hash !== '' && $root.auth.user_image_hash !== null\" href=\"\" class=\"btn-sm dropdown-toggle user-img\" data-toggle=\"dropdown\"> \n" +
    "							<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/{{$root.auth.user_image_hash}}\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\"/>\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</a>\n" +
    "						<a ng-if=\"$root.auth.user_image_hash === '' || $root.auth.user_image_hash === null\" href=\"\" class=\"btn-sm dropdown-toggle user-img\" data-toggle=\"dropdown\"> \n" +
    "							<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/0.default.jpg\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\" />\n" +
    "							<span class=\"caret\"></span>\n" +
    "						</a>\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"#!/my-courses/learning\" title=\"{{'My Courses'|translate}}\" class=\"text-muted\">{{'My Courses'|translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\"><a href=\"#!/user/{{user_id}}/{{$root.auth.displayname|slugify}}/\" title=\"{{'Profile'|translate}}\" class=\"text-muted\">{{'Profile'|translate}}</a></li>\n" +
    "							<li><a href=\"#!/users/edit-profile\" title=\"{{'Edit Profile'|translate}}\" class=\"text-muted\">{{'Edit Profile'|translate}}</a></li>\n" +
    "							<li><a href=\"#!/users/change_password\" title=\"{{'Change Password'|translate}}\" class=\"text-muted\">{{'Change Password'|translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\" ><a href=\"#!/me/subscriptions\" title=\"{{'My Subscriptions'|translate}}\" class=\"text-muted\">{{'My Subscriptions'|translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a href=\"#!/transactions\" title=\"{{'My Transactions'| translate}}\" >{{'My Transactions'| translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Withdrawal') > -1\"><a href=\"#!/user_cash_withdrawals\" title=\"{{'Withdraw Fund Requests'| translate}}\">{{'Withdraw Fund Requests'| translate}}</a></li>\n" +
    "							<li ng-if='!contentInIframe'><a href=\"#!/users/logout\" title=\"{{'Sign Out'|translate}}\" class=\"text-muted\">{{'Sign Out'|translate}}</a></li>\n" +
    "						</ul>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</nav>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</header>");
}]);

angular.module("themes/graspr/views/contactUs/contactUs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/contactUs/contactUs.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"contactForm\" ng-submit=\"model.contactFormSubmit();contactForm.$setPristine();\">\n" +
    "		<div class=\"text-center\"><h3 >{{'Contact Us'|translate}}</h3></div> \n" +
    "		<hr>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.firstname.$invalid && contactForm.firstname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"firstname\">{{'First Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"{{'First Name'|translate}}\" ng-model='model.contactForm.first_name' required>\n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.firstname.$dirty\" ng-messages=\"contactForm.firstname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your first name'|translate}}.</div>\n" +
    "			</div>\n" +
    "		   </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.lastname.$invalid && contactForm.lastname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"lastname\">{{'Last Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"lastname\" placeholder=\"{{'Last Name'|translate}}\" ng-model='model.contactForm.last_name' required>  \n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.lastname.$dirty\" ng-messages=\"contactForm.lastname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your last name'|translate}}.</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.email.$invalid && contactForm.email.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"email\">{{'Email'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			   <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"{{'email'|translate}}\" ng-model='model.contactForm.email' required>  \n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.email.$dirty\" ng-messages=\"contactForm.email.$error\">\n" +
    "				  <div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "				  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.subject.$invalid && contactForm.subject.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Subject'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" ng-model='model.contactForm.subject' placeholder=\"{{'subject'|translate}}\" required> \n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.subject.$dirty\" ng-messages=\"contactForm.subject.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter subject'|translate}}.</div>\n" +
    "				</div> 			\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.message.$invalid && contactForm.message.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Message'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "		   <textarea rows=\"6\" id=\"message\" class=\"form-control\" name=\"message\" placeholder=\"{{'Message'|translate}}\" ng-model='model.contactForm.message' required></textarea>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.message.$dirty\" ng-messages=\"contactForm.message.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter message'|translate}}.</div>\n" +
    "				</div>		   \n" +
    "		  </div>\n" +
    "		</div>               \n" +
    "		<div class=\"well well-sm clearfix\">\n" +
    "		  <div class=\"pull-right\">\n" +
    "			<label class=\"sr-only\" for=\"submit2\">{{'Submit'|translate}}</label>\n" +
    "			<button type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit2\">{{'Submit'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/courses/addCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/addCourse.tpl.html",
    "<div class=\"container\"><!-- addCourse container starts -->\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"addCourse\" ng-submit=\"model.save()\"><!-- addCourse form starts -->\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<h3 class=\"text-center\">{{'Ready to Create a Course'|translate}}</h3>\n" +
    "		<h5 class=\"text-center\">{{'Start by entering the title of a course:'|translate}}</h5>\n" +
    "		<div class=\"clearfix well-sm\"></div>\n" +
    "		<div class=\"clearfix form-group\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'e.g. Learn Photoshop CC from scratch'|translate}}\" ng-model=\"model.course.title\" required>\n" +
    "				<!--<span class=\"help-block\">Please Enter Title</span>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clearfix\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"submit\" class=\"btn btn-primary btn-block\"  ng-disabled=\"disableButton\" id=\"submit2\" value=\"{{'Create Course'|translate}}\">\n" +
    "			</div>\n" +
    "        </div>\n" +
    "	</form><!-- addCourse form end -->\n" +
    "</div><!-- addCourse container end -->");
}]);

angular.module("themes/graspr/views/courses/courses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/courses.tpl.html",
    "<section>\n" +
    "  <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "  <course-category category-id=\"{{category_id}}\" limit=\"10\" category-view-type=\"list\" ></course-category>\n" +
    "  <div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/directives/amountDisplay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/amountDisplay.tpl.html",
    "<span ng-if=\"($root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount !== '0') || (isCoursePrice === 'no')\">\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">{{ model.amount | currency : $root.settings['site.currency_symbol'] : model.fraction}} </span>\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] === ''\">{{ model.amount | currency : $root.settings['site.currency_code'] : model.fraction}} </span>\n" +
    "</span>\n" +
    "<span ng-if=\"isCoursePrice === 'yes' && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount === '0'\">{{'Free'|translate}}</span>");
}]);

angular.module("themes/graspr/views/courses/directives/categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/categories.tpl.html",
    "<ul class=\"nav nav-pills nav-stacked list-group list-group-item-text\" role=\"tablist\">\n" +
    "	<li role=\"presentation\" class=\"list-group-item well-sm\" ng-repeat=\"parentCategory in model.common.parentCategories.data\">\n" +
    "		<a href=\"#!/courses/category/{{parentCategory.id}}/{{parentCategory.sub_category_name|slugify}}\" title=\"{{parentCategory.sub_category_name}}\" role=\"tab\">{{parentCategory.sub_category_name}}\n" +
    "		</a>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("themes/graspr/views/courses/directives/courseCategory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/courseCategory.tpl.html",
    "<div class=\"grid_view\" ng-show =\"category_view_type =='grid'\">\n" +
    "	\n" +
    " </div> \n" +
    "<div class=\"list_view\" ng-show =\"category_view_type =='list'\">\n" +
    "	<section id=\"course-category\">	\n" +
    "		<div class=\"clearfix\">\n" +
    "			<aside class=\"col-md-2 col-sm-2 col-xs-12 col-lg-offset-2 col-md-offset-1  col-sm-offset-1 col-xs-offset-0 navbar-fixed-top\">\n" +
    "				<div class=\"row\">\n" +
    "					<categories-list filter=\"parent\"></categories-list>\n" +
    "				</div>\n" +
    "			</aside>\n" +
    "			<div class=\"tab-content detail-block\">\n" +
    "				<div role=\"tabpanel\" class=\"tab-pane active\" id=\"tab1\">\n" +
    "					<div class=\"bg-primary\">\n" +
    "						<div class=\"container\">\n" +
    "							<div class=\"col-md-9 col-sm-9 col-xs-12 col-lg-offset-3 col-md-offset-3  col-sm-offset-3 col-xs-offset-0\">\n" +
    "								<div class=\"col-xs-12\" ng-if=\"!category\">\n" +
    "									<div class=\"well-lg\"></div>\n" +
    "									<div class=\"well-lg\"></div>\n" +
    "									<span>{{'Hundreds of Specializations and courses in business, computer science, data science, and more.'| translate}}</span>\n" +
    "									<div class=\"well-lg\"></div>\n" +
    "									<div class=\"well-lg\"></div>\n" +
    "								</div>\n" +
    "							   <div class=\"col-xs-12\" ng-if=\"category\">\n" +
    "									<div class=\"well-sm\"></div><div class=\"well-sm\"></div>\n" +
    "									<ol class=\"breadcrumb row\">\n" +
    "									  <li><a href=\"#!/courses\" class=\"fa-inverse\">{{'Catalog'|translate}}</a></li>\n" +
    "									  <i class=\"fa fa-angle-double-right well-sm\"></i>\n" +
    "									  <li class=\"active\">{{model.categories.sub_category_name}}</li>\n" +
    "									</ol>\n" +
    "									<div class=\"navbar-btn clearfix\"></div>\n" +
    "									<div class=\"navbar-btn clearfix\"></div>\n" +
    "									<h2>{{model.categories.sub_category_name}}</h2>\n" +
    "									<div class=\"well-sm\"></div>\n" +
    "									<p>{{model.categories.description}}</p>\n" +
    "									<div class=\"well-lg\"></div><div class=\"well-lg\"></div><div class=\"well-lg\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"container\">\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12 col-lg-offset-3 col-md-offset-3  col-sm-offset-3 col-xs-offset-0\">  \n" +
    "							<div class=\"well-sm\"></div>\n" +
    "							<div class=\"well-sm\"></div><div class=\"well-sm\"></div>\n" +
    "							<div class=\"col-xs-12\">\n" +
    "							<ul class=\"list-unstyled\">\n" +
    "								<li class=\"pull-left\" ng-repeat=\"subCategory in model.categories.sub_category\"><a class=\"well-sm\" href=\"#!/courses/category/{{subCategory.category_id}}/{{subCategory.sub_category_name|slugify}}\">{{subCategory.sub_category_name}}</a>|</li>\n" +
    "							</ul>\n" +
    "							</div>\n" +
    "							<div class=\"clearfix col-xs-12\">\n" +
    "								<h3>{{'Courses'|translate}}</h3>\n" +
    "								<ul class=\"list-unstyled navbar-btn list-group-item-text course-list\">\n" +
    "									<li ng-repeat=\"courses in model.courses.data\" class=\"thumbnail\">\n" +
    "											<div class=\"well-sm clearfix\">\n" +
    "												<div class=\"media navbar-left\"> \n" +
    "													<a ng-if=\"courses.image_hash !== '' && courses.image_hash !== null\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/small_thumb/Course/{{courses.image_hash}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive center-block\" />\n" +
    "													</a>	\n" +
    "													<a ng-if=\"courses.image_hash === '' || courses.image_hash === null\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive center-block\" />\n" +
    "													</a>\n" +
    "												</div>\n" +
    "												<div class=\"media-body col-sm-9 text-muted\">\n" +
    "												  <div class=\"well-sm\"></div>\n" +
    "													<h4 class=\"list-group-item-heading\"> <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\" class=\"text-muted\">{{courses.title}}</a></h4>\n" +
    "													<p class=\"h5\"><a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.subtitle}}\" class=\"text-muted\">{{courses.subtitle}}</a></p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"text-center\" ng-if=\"_metadata.total_records === 0\">\n" +
    "									<h4 class=\"text-primary\">{{'No records found.'|translate}}</h4>\n" +
    "							    </div>\n" +
    "								<div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "									<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#course-category')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/courses/directives/homeCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/homeCourse.tpl.html",
    "<ul class=\"clearfix list-unstyled course-listing\">\n" +
    "   <li class=\"col-md-3 col-sm-4 col-xs-12\" ng-repeat=\"homeCourse in model.homeCourse.data\">\n" +
    "		<div class=\"clearfix panel homePanelHeight\"> \n" +
    "			<!-- course image when is_from_mooc_affiliate false -->\n" +
    "			<a ng-if=\"homeCourse.image_hash && homeCourse.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/{{homeCourse.image_hash}}\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\"  /></span></a>\n" +
    "			<a ng-if=\"!homeCourse.image_hash && homeCourse.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" /></span></a>\n" +
    "			\n" +
    "			<!-- course image when is_from_mooc_affiliate true -->\n" +
    "			<a ng-if=\"homeCourse.course_image && homeCourse.is_from_mooc_affiliate === 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"mooc_thumb_img mooc_home_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{homeCourse.course_image}}\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" class=\"img-responsive\" /></span></a>\n" +
    "			<a ng-if=\"!homeCourse.course_image && homeCourse.is_from_mooc_affiliate === 1\" href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\"><span class=\"course_thumb_img\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{homeCourse.title}}]\" title=\"{{homeCourse.title}}\" /></span></a>\n" +
    "		 \n" +
    "		 <div class=\"clearfix col-xs-12\">\n" +
    "			<h4 class=\"list-group-item-text htruncate-m3\"><a href=\"#!/course/{{homeCourse.id}}/{{homeCourse.slug}}\" title=\"{{homeCourse.title}}\">{{homeCourse.title}}</a></h4>\n" +
    "			<p> <profile-name user-display-name='homeCourse.displayname' user-profile-id='homeCourse.user_id' ng-if=\"homeCourse && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" ></profile-name></p>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("themes/graspr/views/courses/directives/manageCourseNavbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/manageCourseNavbar.tpl.html",
    "<div class=\"row\" >		\n" +
    "	  <div class=\"navbar-btn\">\n" +
    "		<div class=\"well well-sm\">\n" +
    "				\n" +
    "			<div class=\"col-xs-12 col-sm-12 col-md-5\">				\n" +
    "				<div class=\"media\">\n" +
    "					<div class=\"navbar-left col-xs-5 row\">\n" +
    "					<!-- course image when is_from_mooc_affiliate false -->	\n" +
    "					<img ng-if=\"model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" ng-src=\"{{$root.site_url}}img/micro_thumb/Course/{{model.manageCourseOption.image_hash}}\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: Course Image]\" > \n" +
    "					<img ng-if=\"!model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/micro_thumb/Course/0.default.jpg\">\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->	\n" +
    "					<img ng-if=\"model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\"  class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{model.manageCourseOption.course_image}}\">\n" +
    "					<img ng-if=\"!model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\"  class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/micro_thumb/Course/0.default.jpg\">\n" +
    "					</div>\n" +
    "					<div class=\"media-body\">\n" +
    "					  <p><a title=\"{{model.manageCourseOption.title}}\" href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\">{{model.manageCourseOption.title}}</a></p>	\n" +
    "					  <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><profile-name  user-display-name='model.manageCourseOption.displayname' user-profile-id='model.manageCourseOption.user_id' ng-if='model.manageCourseOption.user_id'></profile-name></p>	\n" +
    "					</div>\n" +
    "				</div>					\n" +
    "			</div>				\n" +
    "			<div class=\"col-xs-12 col-sm-12 col-md-3\">\n" +
    "				<span>{{'Published Curriculum items'|translate}}</span>\n" +
    "					<h2>{{model.manageCourseOption.active_online_course_lesson_count}}/{{model.manageCourseOption.online_course_lesson_count}}</h2>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-sm-12 col-md-4\" ng-show=\"model.loadingNavBar === false\">\n" +
    "				<div class=\"\">\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 1'>{{'Your course is in draft mode.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 2'>{{'Your course is under review.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 3'>{{'Your course is in published status.'|translate}}</p>\n" +
    "					<a href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\" class=\"btn btn-default\">{{'Preview'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"model.manageCourseOption.course_status_id === 2 || model.manageCourseOption.course_status_id === 3\" ng-click=\"model.publishCourse('draft')\" >{{'Make as Draft'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"$root.auth.providertype !== 'admin' && model.manageCourseOption.course_status_id !== 2 && model.manageCourseOption.course_status_id !== 3 && ($root.settings['course.is_auto_approval_enabled'] === '0' || $root.settings['course.is_auto_approval_enabled'] === '')\" ng-click=\"model.publishCourse('waiting')\" >{{'Submit For Review'|translate}}</a>\n" +
    "					<span ng-if=\"$root.auth.providertype === 'admin' || $root.settings['course.is_auto_approval_enabled'] === '1'\" class=\"navbar-btn\">\n" +
    "						<a class=\"btn btn-primary\" ng-click=\"model.publishCourse('publish')\" ng-if='model.manageCourseOption.course_status_id !== 3' >{{'Publish This Course'|translate}}</a>\n" +
    "						<p ng-if=\"$root.auth.providertype === 'admin'\" class=\"navbar-btn\">{{'You Are Accessing as Admin.'|translate}} <a href=\"ag-admin/#/courses/list\">{{'Click here to see all courses.'|translate}}</a></p>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\"></div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "    </div>\n" +
    "	  	 		  \n" +
    "	<div class=\"col-sm-2 col-xs-12 col-md-2 pull-left clearfix\" role=\"navigation\">\n" +
    "		<div class=\"row panel\">				 \n" +
    "			<ul class=\"nav nav-stacked  nav-pills list-group-item-heading list-group-item-text\" id=\"leftnavbar\">\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_roadmap'}\"><a  href=\"#!/manage-course/edit-getting-started/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Course Roadmap'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_feedback'}\"><a href=\"#!/manage-course/edit-status/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Feedback'|translate}} </a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE CONTENT'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_goals'}\"><a  href=\"#!/manage-course/edit-goals-and-audience/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Goals'|translate}} </a></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1  || $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" class=\"\" ng-class=\"{active: activetab == 'course_curriculum'}\"><a  href=\"#!/manage-course/edit-curriculum/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Curriculum'|translate}} </a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE INFO'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_basics'}\"><a   href=\"#!/manage-course/edit-basics/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Basics'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_summary'}\"><a   href=\"#!/manage-course/edit-details/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Course Summary'|translate}} </a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_image'}\"><a   href=\"#!/manage-course/edit-image/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Image'|translate}}</a></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_promo_video'}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\"><a   href=\"#!/manage-course/edit-promo-video/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Promo Video'|translate}}</a></li>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'COURSE SETTINGS'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-class=\"{active: activetab == 'course_price'}\"><a   href=\"#!/manage-course/edit-price-and-promotions/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Price'|translate}}</a></li>\n" +
    "				<div oc-lazy-load='loadCoupons'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'coupons'}\" course-coupon course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Coupons') > -1\"></li></div>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_danger_zone'}\"><a   href=\"#!/manage-course/edit-danger-zone/{{model.manageCourseOption.id}}\" class=\"\">&nbsp;{{'Danger Zone'|translate}}</a></li>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\" ><strong><span>&nbsp; {{'PAYOUT'|translate}}</span></strong></li>\n" +
    "				<div oc-lazy-load='loadPayout' class=\"nav nav-stacked nav-pills\"><li class=\"\"  ng-class=\"{active: activetab == 'payout'}\" pay-out course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\"></li></div>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"><strong><span>&nbsp; {{'ANALYTICS'|translate}}</span></strong></li>\n" +
    "				<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" oc-lazy-load='loadRatingAndReview' class=\"nav nav-stacked nav-pills\"><li ng-class=\"{active: activetab == 'coursestudtsatisfaction'}\" student-satisfaction course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">\n" +
    "				</li></div>\n" +
    "				<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"  ><strong><span>&nbsp; {{'SEO'|translate}}</span></strong></li>\n" +
    "				<div oc-lazy-load='loadSeo'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'seo'}\" course-seo course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"></li></div>\n" +
    "				<li class=\"\" ><strong><span>&nbsp; {{'MORE'|translate}}</span></strong></li>\n" +
    "				<li class=\"\" ng-class=\"{active: activetab == 'course_help'}\"><a  href=\"#!/manage-course/edit-help/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Help'|translate}}</a></li>							\n" +
    "			</ul> \n" +
    "		</div>\n" +
    "	 </div>");
}]);

angular.module("themes/graspr/views/courses/directives/onlineLessons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/onlineLessons.tpl.html",
    "<h3 ng-if=\"model.OnlineCourse.data.length\">{{'Course Syllabus'|translate}}</h3>\n" +
    "<ul class=\"list-group clearfix  navbar-btn\">\n" +
    "			<li ng-repeat=\"OnlineCourse in model.OnlineCourse.data\" class=\"list-group-item learn-page-lesson-list clearfix ng-scope\">\n" +
    "				<div  ng-if=\"OnlineCourse.is_chapter == 1\" class=\"col-xs-12\"><strong>{{'Chapter'|translate}} : {{OnlineCourse.lesson_name}}</strong></div>\n" +
    "				<div  class=\"col-xs-8\" ng-if=\"OnlineCourse.is_chapter == 0\">\n" +
    "					<a  class=\"text-muted\" ><i class=\"fa fa-download\" ng-if='OnlineCourse.online_lesson_type_id === 5'></i>\n" +
    "					<i class=\"fa fa-file-video-o\" ng-if='OnlineCourse.online_lesson_type_id === 4'> </i>\n" +
    "					<i class=\"fa fa-play-circle-o\"  ng-if='OnlineCourse.online_lesson_type_id === 3'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='OnlineCourse.online_lesson_type_id === 1'></i>\n" +
    "					<i class=\"fa fa-file\"  ng-if='OnlineCourse.online_lesson_type_id === 2'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='OnlineCourse.online_lesson_type_id === 6'></i>\n" +
    "					<i class=\"fa fa-edit\"  ng-if='!OnlineCourse.online_lesson_type_id'></i></a>\n" +
    "					&nbsp;&nbsp; <a  class=\"text-muted\" href=\"#\" ng-click=\"showDetail(OnlineCourse, $event)\">\n" +
    "					{{'Lesson'|translate}}: &nbsp;{{OnlineCourse.lesson_name}}\n" +
    "						<i class=\"fa fa-caret-down\" ng-hide=\"active == OnlineCourse.id\" ng-if='OnlineCourse.lesson_description'></i>\n" +
    "						<i class=\"fa fa-caret-up\" ng-show=\"active==OnlineCourse.id\"></i>\n" +
    "					</a>\n" +
    "					\n" +
    "				</div>\n" +
    "							\n" +
    "				<div class=\"col-xs-4 \"ng-if=\"OnlineCourse.is_chapter == 0\">\n" +
    "					<div  ng-if='OnlineCourse.is_preview === 1' class=\"pull-left\">\n" +
    "						<a href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\" title=\"{{'Preview'|translate}}\" class=\"btn btn-sm btn-primary\">{{'Preview'|translate}}</a> 						\n" +
    "					</div>\n" +
    "					<span ng-bind=\"getDuration(OnlineCourse.duration + '', $event)\" class=\"pull-right\" ng-if=\"OnlineCourse.duration\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"clearfix\"></div>	\n" +
    "				<div ng-show=\"active==OnlineCourse.id\"  class=\"panel-body\" >\n" +
    "						<span>{{OnlineCourse.lesson_description}}</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "	</ul>");
}]);

angular.module("themes/graspr/views/courses/directives/paymentButtons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/paymentButtons.tpl.html",
    "<div class=\"h2 list-group-item-heading\">\n" +
    "		<strong><amount-display amount='{{model.coursePrice}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "	</div>\n" +
    "	<!-- if both payment and cart plugin && subscription plugin disabled , now all courses will be free of access and course should not be mooc affliated -->\n" +
    "	<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\" class=\"navbar-btn\">\n" +
    "			 <a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-primary btn-lg btn-block\">{{'Start Learning Now'|translate}}</a>\n" +
    "	</div>\n" +
    "	\n" +
    "	<!-- if subscription plugin enabled, it allows courses based on instructions levels based on subscriptions and course should not be mooc affliated -->		\n" +
    "	<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !model.btnLink && ($root.auth.id !== model.userId)\">\n" +
    "		<div ng-if='!$root.isAuth || subscriptionStatus === false'>\n" +
    "			<a href=\"#!/subscribe/plans\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-primary btn-lg btn-block\" >{{'Start Learning Now'| translate}}</a>\n" +
    "		</div>	\n" +
    "		<div ng-if='$root.isAuth && subscriptionStatus' class=\"navbar-btn\">\n" +
    "			<div  class=\"navbar-btn\" ng-show=\"course_level_access\">					\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, false)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-primary btn-lg btn-block\">{{'Start Learning Now'|translate}}</a>\n" +
    "			</div>\n" +
    "			<div  class=\"navbar-btn\" ng-hide=\"course_level_access\">		\n" +
    "				<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "					<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "				</div>\n" +
    "				<a href=\"#!/me/subscriptions\"  title=\"{{'Change Your Plan'|translate}}\" class=\"btn btn-primary btn-lg btn-block\">{{'Change Plan'|translate}}</a>\n" +
    "			</div>		\n" +
    "		</div>	\n" +
    "	</div>	\n" +
    "	<!-- payment and cart plugin enabled && subscription plugin disabled and course should not be mooc affliated-->		\n" +
    "	\n" +
    "	<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\" class=\"navbar-btn\">\n" +
    "		<!-- If logged in -->\n" +
    "		<div ng-if=\"$root.isAuth\">\n" +
    "			<!-- Free courses or already paid courses -->		\n" +
    "			<div ng-if=\"model.coursePrice === '0' || paidStatus\" class=\"navbar-btn\">\n" +
    "				 <a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-primary btn-lg btn-block\">{{'Start Learning Now'|translate}}</a>\n" +
    "			</div>\n" +
    "			<!-- not paid and not purchased courses -->	\n" +
    "			<div ng-if=\"paidStatus === false && model.coursePrice !== '0'\" class=\"navbar-btn\">					\n" +
    "				<buy-button  modal-size='md' btn-class-name='btn-primary btn-lg btn-block' course-price='{{model.coursePrice}}' course-id='{{model.courseId}}' course-status='{{model.takenCourseStatus}}' ng-if='model.courseId' ></buy-button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- If not logged in -->\n" +
    "		<div ng-if=\"!$root.isAuth\" class=\"navbar-btn\">\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Start Learning Now'|translate}}\"  class=\"btn btn-primary btn-lg btn-block\" ng-if=\"model.coursePrice === '0'\">{{'Start Learning Now'|translate}}</a>\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\"  class=\"btn btn-primary btn-lg btn-block\" ng-if=\"model.coursePrice !== '0'\">{{'Take This Course'|translate}}</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<!--Mooc affliated courses-->\n" +
    "	\n" +
    "	<div ng-if=\"model.btnLink !== '' && model.btnLink && ($root.auth.id !== model.userId)\">\n" +
    "		<div class=\"navbar-btn\" >\n" +
    "			<a href=\"{{model.btnLink}}\" target=\"_blank\" title=\"{{'Take This Course'|translate}}\"  class=\"btn btn-primary btn-lg btn-block\" ng-if=\"$root.isAuth\" >{{'Take This Course'|translate}}</a>\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\"  class=\"btn btn-primary btn-lg btn-block\" ng-if=\"!$root.isAuth\">{{'Take This Course'|translate}}</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<!-- Teachers own course -->\n" +
    "	<div ng-if=\"$root.auth.id === model.userId && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" class=\"navbar-btn\">\n" +
    "		<a href=\"#!/manage-course/add/{{model.courseId}}/{{model.slug}}\" class=\"btn btn-primary btn-lg btn-block\"  >{{'Edit Course'|translate}}</a>\n" +
    "	</div>");
}]);

angular.module("themes/graspr/views/courses/directives/relatedCoursesByCategory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/directives/relatedCoursesByCategory.tpl.html",
    "<div ng-if=\"model.related_courses_by_category_length > 0\">\n" +
    "<h3 class=\"text-left list-group-item-heading col-xs-12\">{{'Related Courses'|translate}}</h3>\n" +
    "  <ul class=\"clearfix list-unstyled course-listing\">\n" +
    "	<li class=\"col-sm-4 col-xs-12 navbar-btn\" ng-repeat=\"relatedCoursesByCategory in model.relatedCoursesByCategory.data\">\n" +
    "	  <div class=\"clearfix panel sidebarPanel\"> \n" +
    "		  <!-- course image when is_from_mooc_affiliate false -->\n" +
    "		<a ng-if=\"relatedCoursesByCategory.image_hash && relatedCoursesByCategory.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{relatedCoursesByCategory.id}}/{{relatedCoursesByCategory.slug}}\">\n" +
    "			<span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_medium_thumb/Course/{{relatedCoursesByCategory.image_hash}}\" alt=\"[Image: {{relatedCoursesByCategory.title}}]\" title=\"{{relatedCoursesByCategory.title}}\" /></span> </a>\n" +
    "		<a ng-if=\"!relatedCoursesByCategory.image_hash && relatedCoursesByCategory.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{relatedCoursesByCategory.id}}/{{relatedCoursesByCategory.slug}}\">\n" +
    "		     <span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{relatedCoursesByCategory.title}}]\" title=\"{{relatedCoursesByCategory.title}}\" /></span> </a>\n" +
    "		<!-- course image when is_from_mooc_affiliate true -->\n" +
    "		<a ng-if=\"relatedCoursesByCategory.course_image && relatedCoursesByCategory.is_from_mooc_affiliate === 1\" href=\"#!/course/{{relatedCoursesByCategory.id}}/{{relatedCoursesByCategory.slug}}\">\n" +
    "		     <span class=\"mooc_thumb_img moc_sidebar_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{relatedCoursesByCategory.course_image}}\" alt=\"[Image: {{relatedCoursesByCategory.title}}]\" title=\"{{relatedCoursesByCategory.title}}\" /></span> </a>\n" +
    "	    <a ng-if=\"!relatedCoursesByCategory.course_image && relatedCoursesByCategory.is_from_mooc_affiliate === 1\" href=\"#!/course/{{relatedCoursesByCategory.id}}/{{relatedCoursesByCategory.slug}}\">\n" +
    "		     <span class=\"course_thumb_img\"><img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/large_medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{relatedCoursesByCategory.title}}]\" title=\"{{relatedCoursesByCategory.title}}\"/></span> </a>\n" +
    "		\n" +
    "		<p class=\"navbar-btn col-xs-12\"> <a href=\"#!/course/{{relatedCoursesByCategory.id}}/{{relatedCoursesByCategory.slug}}\" title=\"{{relatedCoursesByCategory.title}}\">{{relatedCoursesByCategory.title}}</a></p>\n" +
    "	  </div>\n" +
    "	</li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/courses/learnCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/learnCourse.tpl.html",
    "<div class=\"clearfix lesson_container\" >\n" +
    "       <div class=\"navbar-default bg-primary col-sm-3 col-md-3 col-lg-2\">   \n" +
    "            <h4 class=\"initialism\">\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength > 0\" href=\"#!/course/{{model.OnlineCourse[0].course_id}}/{{model.OnlineCourse[0].course_slug}}\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength === 0\" href=\"#!/\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype !== 'admin'\" href=\"#!/my-courses/learning\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Dashboard'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype === 'admin'\" href=\"ag-admin/#/courses/list\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Admin Panel'|translate}}</a>\n" +
    "			</h4>\n" +
    "            <ul class=\"list-unstyled nav navbar-default list-group\">\n" +
    "                 <li class=\"row learn-page-lesson-list\" ng-repeat=\"OnlineCourse in model.OnlineCourse\" ng-class=\"{'btn-primary' : OnlineCourse.is_chapter === 1, ' list-group-item':OnlineCourse.is_chapter === 0}\" >\n" +
    "					<!-- showing lesson chapter name-->\n" +
    "					<span class=\"row \" ng-if='OnlineCourse.is_chapter === 1'>\n" +
    "                        <div class=\"col-xs-12 \"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}} </strong></div>\n" +
    "                    </span>\n" +
    "					<!-- showing lesson name -->\n" +
    "					<a class=\"media\" ng-class=\"{'text-success': OnlineCourse.completed === 1 && !coursePurchased, 'btn-default active': model.viewLessonDetails.id === OnlineCourse.id || lessonID === OnlineCourse.id }\" href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\"  ng-if='OnlineCourse.is_chapter === 0'>\n" +
    "						<!-- completed lesson with success tick icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed === '1'|| model.viewLessonDetails.completedId === OnlineCourse.id\">\n" +
    "						<i class=\"fa fa-check-circle fa-lg\" ng-class=\"{'text-success': model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'}\" ng-if=\"model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'\"></i>\n" +
    "						<i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.completed !== '1'\" ></i>\n" +
    "						</span>\n" +
    "						<!-- not completed but viewed lesson with success green circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1 || OnlineCourse.viewed === '1'}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.viewed === '1'\" ></i></span>\n" +
    "						<!-- not completed also not viewed lesson with success gary or white circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1 }\" ng-if=\"OnlineCourse.viewed === '0' \" ></i></span>\n" +
    "						<!-- not completed and not eligible to view lesson -->\n" +
    "						<span class=\"pull-left\" ng-if='!coursePurchased && $root.isAuth || !OnlineCourse.completed'><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.completed === 1 || OnlineCourse.viewed === '1'}\" ></i></span>\n" +
    "						<span class=\"media-body\">{{'Lesson'|translate}}: {{OnlineCourse.lesson_name}}</span>	\n" +
    "					</a>								\n" +
    "				</li>                                           \n" +
    "                <div class=\"well-sm\"></div>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-9 col-md-9 col-lg-10 bg-primary navbar-inverse\"> \n" +
    "			 <div class=\"btn-default row\">\n" +
    "				<div class=\"well-sm\">\n" +
    "					<a class=\"btn btn-primary\" ng-disabled=\"model.neighbourDetails.previous_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.previous_id}}\"  > <i class=\"glyphicon glyphicon-chevron-left\"></i>  {{'PREVIOUS LECTURE'|translate}}</a>	\n" +
    "					<a class=\"btn btn-primary navbar-right\"  ng-disabled=\"model.neighbourDetails.next_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.next_id}}\" >{{'NEXT LECTURE'|translate}}  <i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "					<a class=\"btn navbar-right list-group-item-heading\" ng-disabled=\"shouldBuyCourse\" ng-click=\"model.lessonComplete(model.viewLessonDetails.id, model.viewLessonDetails)\" ng-if='model.viewLessonDetails.id && coursePurchased'>\n" +
    "					<i class=\"fa fa-check-circle fa-lg fa-fw text-muted\" ng-class=\"{'text-success': model.viewLessonDetails.completed === '1'}\" ></i><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed === '1'\"> {{'Mark as Unread'|translate}}</strong><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed !== '1'\"> {{'Mark as Completed'|translate}}</strong></a>									\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			\n" +
    "            <div class=\"well-lg clearfix lesson_details\" ng-if='model.viewLessonDetails !== null && !shouldBuyCourse'>\n" +
    "			    <div class=\"text-center\" ng-if=\"model.OnlinelessonLength === 0\" >\n" +
    "					<h2 class=\"fa-inverse\">{{'No lessons available.'|translate}}</h2>\n" +
    "				</div>\n" +
    "            	<div class=\"col-xs-12\" >\n" +
    "                	<div class=\"col-sm-12 clearfix\">					\n" +
    "                        <h3 class=\"list-group-item-heading\"><strong>{{model.viewLessonDetails.lesson_name}}</strong></h3>\n" +
    "                        <div class=\"navbar-btn clearfix\"></div>\n" +
    "                        <p class=\"h6\">{{model.viewLessonDetails.lesson_description}}</p>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "                    </div>\n" +
    "               		<div class=\"col-sm-6 pull-right text-right\">\n" +
    "                       \n" +
    "                   </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 clearfix\">\n" +
    "					<div class=\"col-xs-12\">					\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 1'><p ng-bind-html='model.viewLessonDetails.article_content'></div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 2'>\n" +
    "							<div class=\"well-lg text-center\"><a href=\"#\" class=\"btn\"> <h4>{{'Open Document'|translate}} &nbsp; <i class=\"fa fa-file\"></i>&nbsp;{{model.viewLessonDetails.filename}}</h4></a></div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 3'>										\n" +
    "							<div class=\"alert alert-info\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 1\">\n" +
    "								<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "							</div>\n" +
    "							<div class=\"alert alert-danger\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 0 && model.viewLessonDetails.is_lesson_ready_to_view !== 1\">\n" +
    "								<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "							</div>							\n" +
    "							<div class=\"well-lg col-xs-11 ml-4\">\n" +
    "								<video id=\"video\" ng-src=\"{{model.viewLessonDetails.video_url}}\" controls=\"true\" ng-if=\"model.viewLessonDetails.is_lesson_ready_to_view === 1\"></video>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 4'>\n" +
    "						 <p class=\"videoWrapper\" ng-bind-html='model.viewLessonDetails.embed_code'></p>\n" +
    "						 </div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 5'>\n" +
    "							<div class=\"well-lg text-center\">\n" +
    "								<h4>{{'Download this lesson'|translate}}</h4>\n" +
    "								<p>{{model.viewLessonDetails.filename}}</p>\n" +
    "								<a class=\"btn ng-binding btn-default\" ng-href = \"{{model.viewLessonDetails.download_url}}\"><i class=\"fa fa-3x fa-download fa-3x\"></i></a>							\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 6'>{{model.viewLessonDetails.lessondescription}}</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				 \n" +
    "            </div> \n" +
    "			<!-- User not able to view this lesson because of payment pending or subscription -->\n" +
    "			<div class=\"well-lg clearfix\" ng-if='shouldBuyCourse && model.OnlineCourse.length > 0 ' >	\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<!-- if user not logged in -->\n" +
    "					<div ng-if='!isAuth'>\n" +
    "						<div class=\"clearfix text-center\">\n" +
    "							<h4>{{'Already have an account?'|translate}}</h4>\n" +
    "							<a ng-href=\"#!/users/login\"  ng-click=\"modalLogin($event)\" title=\"{{'Login'| translate}}\"  class=\"btn btn-primary\">{{'Login'|translate}}</a> \n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<!-- available payment options to view this lesson -->\n" +
    "					<div class=\"clearfix text-center\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "						<h3>{{'Ready to watch this entire course?'|translate}}</h3>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"h2 list-group-item-heading text-center\">\n" +
    "							<strong><amount-display amount='{{model.neighbourDetails.course_price}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "						</div>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<!-- user subscribed plan but its not able to access this lesson course's instruction level -->\n" +
    "						<div ng-if=\"shouldChangePlan\" class=\"col-md-6 col-md-offset-3\">\n" +
    "							<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "								<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "							</div>\n" +
    "							<a href=\"#!/me/subscriptions\" title=\"{{'Change Your Plan'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Change Plan'|translate}}</a>\n" +
    "						</div>\n" +
    "						<!-- user not subscribed any plan -->\n" +
    "						<a href=\"#!/subscribe/plans\" class=\"btn btn-primary\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !shouldChangePlan\">{{'Start Learning Now'|translate}}</a>&nbsp;						\n" +
    "						<!-- payment plugin enabled -->\n" +
    "						<buy-button  btn-class-name='btn-primary'  course-id='{{model.OnlineCourse[0].course_id}}' course-status='false' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\" ></buy-button>								\n" +
    "					</div>\n" +
    "             </div>\n" +
    "           \n" +
    "         </div>\n" +
    "		\n" +
    "     </div>\n" +
    "	<div class=\"navbar-default clearfix\">   \n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	</div>\n" +
    "	\n" +
    "	");
}]);

angular.module("themes/graspr/views/courses/learning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/learning.tpl.html",
    "<section id=\"learning-courses\">	\n" +
    "	<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<aside class=\"col-sm-3 col-xs-12\">\n" +
    "		<div class=\"well-lg\"></div>			\n" +
    "			<ul class=\"nav nav-pills nav-stacked list-group list-group-item-text text-muted\" role=\"tablist\">\n" +
    "				<li role=\"presentation\" class=\"list-group-item well-sm active\" >\n" +
    "					<a href=\"#enrollment\" showtab=\"\" title=\"{{'Enrollments'|translate}}\" role=\"tab\">{{'Enrollments'|translate}}</a>\n" +
    "				</li>\n" +
    "			</ul>			\n" +
    "		</aside>\n" +
    "		<div class=\"tab-content detail-block\">\n" +
    "			<div role=\"tabpanel\" class=\"tab-pane active\" id=\"enrollment\">			\n" +
    "				<div class=\"col-sm-9 col-xs-12\">  \n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<div class=\"well-sm\"></div><div class=\"well-sm\"></div>\n" +
    "					<span class=\"h3 text-muted\">{{'My Courses'|translate}}</span>\n" +
    "					 <div class=\"navbar-btn\">\n" +
    "						<ul class=\"list-inline navbar-btn nav nav-tabs\" role=\"tablist\">\n" +
    "						  <li class=\"\"  ng-class=\"{active: !ordering}\"><a href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" class=\"text-muted\" aria-controls=\"learning\" role=\"tab\">{{'Current'|translate}}</a></li>\n" +
    "						  <li class=\"\" ng-class=\"{active: ordering == 'archived'}\" ><a ui-sref=\"myCoursesLearning({ ordering: 'archived' })\" class=\"text-muted\" title=\"{{'Teaching'|translate}}\" aria-controls=\"teaching\" role=\"tab\">{{'Archived'|translate}}</a></li>\n" +
    "						  <li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\"  class=\"text-muted\">{{'Wishlist'|translate}}</a></li>\n" +
    "						</ul>\n" +
    "					 </div>				\n" +
    "				</div>\n" +
    "			<div class=\"tab-content detail-block\">\n" +
    "				<div role=\"tabpanel\" class=\"tab-pane active\" id=\"current\">					\n" +
    "					<div class=\"container\">\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12 col-lg-offset-3 col-md-offset-3  col-sm-offset-3 col-xs-offset-0\">  \n" +
    "							<div class=\"well-sm\"></div>\n" +
    "							<div class=\"clearfix\" ng-if=\"_metadata.total_records > 0\">\n" +
    "								<ul class=\"list-unstyled navbar-btn list-group-item-text course-list\">\n" +
    "									<li ng-repeat=\"learningCourses in  model.learningCourses.data\"  id=\"learning_elements_{{learningCourses.id}}\" class=\"thumbnail\">\n" +
    "											<div class=\"well-sm clearfix\">\n" +
    "												<div class=\"media navbar-left text-center col-sm-3\">\n" +
    "													<!-- course image when is_from_mooc_affiliate false -->\n" +
    "													<a ng-if=\"learningCourses.course_image_hash && learningCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{learningCourses.course_id}}/{{learningCourses.course_slug}}\" title=\"{{learningCourses.course_title}}\"> \n" +
    "														<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/{{learningCourses.course_image_hash}}\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"!learningCourses.course_image_hash && learningCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{learningCourses.course_id}}/{{learningCourses.course_slug}}\" title=\"{{learningCourses.course_title}}\"> \n" +
    "														<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<!-- course image when is_from_mooc_affiliate true -->	\n" +
    "													<a ng-if=\"learningCourses.course_image && learningCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{learningCourses.course_id}}/{{learningCourses.course_slug}}\" title=\"{{learningCourses.course_title}}\"> \n" +
    "														<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{learningCourses.course_image}}\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"!learningCourses.course_image && learningCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{learningCourses.course_id}}/{{learningCourses.course_slug}}\" title=\"{{learningCourses.course_title}}\"> \n" +
    "														<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{learningCourses.course_title}}]\" title=\"{{learningCourses.course_title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "												</div>\n" +
    "												<div class=\"media-body col-md-9 text-muted\">\n" +
    "												  <div class=\"navbar-btn visible-xs clearfix\"></div>\n" +
    "												  <div class=\"pull-right dropdown\"  ng-if=\"learningCourses.course_user_status !== 'Archived'\"> <a href=\"javascript:void(0)\" title=\"{{'Options'|translate}}\" class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a>\n" +
    "													<ul class=\"dropdown-menu\">\n" +
    "													  <li><a href=\"#\" ng-click=\"model.addToArchive(learningCourses.id, $event, ordering)\" title=\"{{'Archive'|translate}}\" class=\"text-muted\"  >{{'Archive'|translate}}</a></li>	\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "													<h4 class=\"list-group-item-heading\"> <a href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" title=\"{{learningCourses.course_title}}\" class=\"text-muted\">{{learningCourses.course_title}}</a></h4>\n" +
    "													<div class=\"clearfix\"><span>{{learningCourses.subtitle}}</span></div>\n" +
    "													<div class=\"clearfix well-sm\"></div>\n" +
    "													<span ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\">\n" +
    "													<profile-name user-profile-id='learningCourses.teacher_user_id' user-display-name='learningCourses.teacher_name' user-name-class='text-muted' ng-if='learningCourses'></profile-name></span>\n" +
    "													<div class=\"col-sm-12 row\">\n" +
    "													<div class=\"text-left navbar-btn col-sm-4 row\">\n" +
    "													 <rating-stars average-rating='{{learningCourses.rating}}' ng-if=\"model.learningCourses && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars>\n" +
    "													</div>\n" +
    "													<div class=\"text-left col-sm-3 nav navbar-btn row\">\n" +
    "														<rating-button courseuserid='{{learningCourses.id}}' btnstyle=\"text\" btntext=\"{{'Rate It'|translate}}\" user-id='{{learningCourses.user_id}}' course-id='{{learningCourses.course_id}}' ng-if='model.learningCourses' class=\"col-xs-12\"></rating-button>\n" +
    "													</div>\n" +
    "													<a class=\"btn btn-primary pull-right col-sm-3\" href=\"#!/{{learningCourses.course_slug}}/learn/{{learningCourses.course_id}}\" >{{'Resume'|translate}}</a>\n" +
    "													 </div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "							</div>\n" +
    "							<div class=\"clearfix col-xs-12\" ng-if=\"_metadata.total_records === 0\">\n" +
    "								<div class=\"thumbnail well-lg\" >\n" +
    "									<p>{{'You haven\\'t signed up for any courses yet.'|translate}}</p>\n" +
    "									<a href=\"#!/courses/search\" class=\"btn btn-primary\">{{'Find a Course'|translate}}</a>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"well-sm\"></div>\n" +
    "							<div class=\"paging clearfix col-xs-12 text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "							  <pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#learning-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		</div>\n" +
    "		<div class=\"tab-content detail-block\">\n" +
    "			<div role=\"tabpanel\" class=\"tab-pane\" id=\"accomplishment\">	\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);

angular.module("themes/graspr/views/courses/manageCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourse.tpl.html",
    "<section class=\"clearfix\">\n" +
    "	<div class=\"container\">			\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"course_roadmap\">\n" +
    "				<div class=\"panel well-sm\">	\n" +
    "					<p ng-bind-html=\"model.courseRoadmap.content\"></p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseBasics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseBasics.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			 <div  class=\"navbar-default tab-pane active\" id=\"basics\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Basics'|translate}}</h3>\n" +
    "						<span>{{'Help students find your course.'|translate}}</span>\n" +
    "					</div>					\n" +
    "				</div>				\n" +
    "				<div class=\"well-lg panel clearfix\">\n" +
    "					<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_basics' ng-submit='model.saveCourseBasic()'>\n" +
    "								<div class=\"form-group\" ng-show=\"$root.auth.providertype === 'admin'\">\n" +
    "									<label class=\"control-label\" for=\"course_title\">{{'Lecturer'|translate}}</label>\n" +
    "									<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.user_id\" ng-options=\"Instructors.user_id as Instructors.displayname for Instructors in model.instructors\"  name=\"sub_category\">\n" +
    "										<option value=\"\" >---{{'Please select'|translate}}---</option>													\n" +
    "									</select>\n" +
    "									<span class=\"help-block\"><span class=\"text-info\">{{'Leave it blank, if it is site\\'s course.'|translate}}</span></span>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<label class=\"control-label\" for=\"course_title\">{{'Title'|translate}}</label>\n" +
    "									<div class=\"input-group\">\n" +
    "										<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'Title'|translate}}\" maxlength = \"100\" ng-model=\"model.courseBasic.title\" required >	\n" +
    "										<span class=\"input-group-addon\">{{model.courseBasic.title.length}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<label class=\"control-label\" for=\"course_subtitle\">{{'Sub Title'|translate}}</label>\n" +
    "									<div class=\"input-group\">\n" +
    "										<input type=\"text\" class=\"form-control\" id=\"course_sub_title\" placeholder=\"{{'Sub Title'|translate}}\" maxlength = \"200\" ng-model=\"model.courseBasic.subtitle\" required>\n" +
    "										<span class=\"input-group-addon\">{{model.courseBasic.subtitle.length}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"form-group\">\n" +
    "									<div class=\"row\">\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"language\">{{'Language'|translate}}</label>\n" +
    "												<div class=\"\">\n" +
    "													<select class=\"form-control\" id=\"language\"  name=\"language\" ng-model=\"model.courseBasic.language_id\" ng-options=\"languages.id as languages.name for languages in model.languages\" required >\n" +
    "														<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "													</select>							\n" +
    "												</div>\n" +
    "										</div>\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"parent_category\">{{'Category'|translate}}</label>\n" +
    "											<div class=\"\">\n" +
    "												<select class=\"form-control\" id=\"parent_category\" name=\"parent_category\" ng-model=\"model.courseBasic.parent_category_id\" data-ng-change=\"model.getSubCategories()\" ng-options=\"parentCategory.id as parentCategory.sub_category_name for parentCategory in model.listcourse.category\" required >\n" +
    "													<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "												</select>							\n" +
    "											</div>\n" +
    "										</div>										\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								 <div class=\"form-group\" ><!-- ng-show=\"model.subCategories.length\" -->\n" +
    "									<div class=\"row\">\n" +
    "										<div class=\"col-md-6\">\n" +
    "											\n" +
    "										</div>\n" +
    "										<div class=\"col-md-6\">\n" +
    "											<label class=\"control-label\" for=\"sub_category\">{{'Sub Category'|translate}}</label>\n" +
    "											<div class=\"\">\n" +
    "												<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.category_id\" ng-options=\"subCategory.category_id as subCategory.sub_category_name for subCategory in model.subCategories\"  name=\"sub_category\" required >\n" +
    "													<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "												</select>							\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>							\n" +
    "								<div class=\"well well-sm clearfix\">\n" +
    "									<div class=\"pull-right\">\n" +
    "										<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "										<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "									</div>\n" +
    "								</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>		  \n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseCurriculum.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseCurriculum.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix curriculum\" ng-if=\"model.loading === false\">	\n" +
    "			 <div class=\"navabar-default tab-pane active\" id=\"curriculum\">\n" +
    "			 <div class=\"panel\">\n" +
    "				<div class=\"list-header text-center\"><h3>{{'Curriculum'|translate}}</h3></div>	\n" +
    "			 </div>\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<!-- lessons and chapters listing -->	\n" +
    "					<ul class=\"clearfix list-unstyled navbar-btn col-xs-12\" ui-sortable=\"sortableOptions\" ng-model=\"model.OnlineCourse.data\">													 \n" +
    "						<li class=\"clearfix\" ng-repeat='OnlineCourse in model.OnlineCourse.data' >\n" +
    "							<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 1\"  ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1'}\">\n" +
    "								<div class=\"clearfix well-sm\">\n" +
    "								<div class=\"col-xs-10 row\">\n" +
    "									<span class=\"clearfix\"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>\n" +
    "									<i class=\"clearfix htruncate-m2\">{{OnlineCourse.lesson_description}}</i>\n" +
    "								</div>								\n" +
    "								<ul class=\"list-inline clearfix pull-right\">\n" +
    "										<li ng-if=\"!OnlineCourse.showDetailsChapter\">\n" +
    "										  <a href=\"#\" class=\"btn pull-right text-info\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>	\n" +
    "										</li>\n" +
    "										<li ng-if=\"OnlineCourse.showDetailsChapter\">\n" +
    "										  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "										</li>								\n" +
    "									</ul>\n" +
    "									\n" +
    "								<a href=\"#\" class=\"btn pull-right  text-info\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "								\n" +
    "								</div>\n" +
    "								<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItem1 && currentView === 'edit' && OnlineCourse.showDetailsChapter\" >									\n" +
    "								<div class=\"col-xs-12 clearfix \" >\n" +
    "									<div class=\"panel well-sm clearfix \" ng-show=\"model.editsection === true\">\n" +
    "										<form role=\"form\" name=\"chapter_edit \"class=\"form-horizontal clearfix text-muted\"  ng-submit=\"model.updateChapter(OnlineCourse.id )\" >		\n" +
    "												<div class=\"form-group\" >\n" +
    "													<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "														<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "														<div class=\"input-group\">			\n" +
    "																<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.editOnlineChapter.lesson_name\" required maxlength=\"50\">\n" +
    "																<span class=\"input-group-addon\">{{model.editOnlineChapter.lesson_name.length}}</span>																						\n" +
    "														</div>													\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\" >\n" +
    "													<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "														<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>				\n" +
    "														<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.editOnlineChapter.lesson_description\" maxlength=\"150\"></textarea>														\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"clearfix\">\n" +
    "													<div class=\"text-center\">\n" +
    "														<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "														<input type=\"submit\" ng-disabled=\"disableUpdateButton\" class=\"btn btn-primary\" id=\"section_save\" value=\"{{'Save'|translate}}\" >\n" +
    "													 </div>\n" +
    "											</div>\n" +
    "										</form>\n" +
    "										</div>\n" +
    "									</div>								\n" +
    "								</div>							\n" +
    "							</div>\n" +
    "							<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 0\" >\n" +
    "								<div class=\"col-xs-12\" ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1', 'btn-success':OnlineCourse.is_chapter == '0'}\">\n" +
    "									<div class=\"clearfix well-sm\"><span><strong>{{'Lecture'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>									\n" +
    "									<a ng-click=\"showDetails = ! showDetails\" class=\"btn text-info pull-right\"><span><i class=\"fa fa-lg fa-caret-square-o-down\"></i></span></a>									\n" +
    "									<a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "									</div>\n" +
    "									<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-show=\"showDetails\">\n" +
    "										<div class=\"clearfix\">\n" +
    "											<div ng-show=\"OnlineCourse.lesson_description\"><span class=\"htruncate-m2\">&nbsp;{{OnlineCourse.lesson_description}}</span></div>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 5\" class=\"text-muted\"><i class=\"fa fa-download\"></i>&nbsp;{{OnlineCourse.filename}}</span>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 4\" class=\"text-muted\"><i class=\"fa fa-file-video-o\"></i>&nbsp;{{OnlineCourse.lesson_name}}</span>\n" +
    "											<span ng-if=\"OnlineCourse.online_lesson_type_id === 3\" class=\"text-muted\"><i class=\"fa fa-play-circle-o\"></i></i>&nbsp;{{OnlineCourse.filename}}</span>										\n" +
    "										</div>\n" +
    "										<ul class=\"list-inline clearfix pull-right\">\n" +
    "										<li ng-if=\"!OnlineCourse.showDetailsLesson\">\n" +
    "										 <a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id,OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>\n" +
    "										</li>\n" +
    "										<li ng-if=\"OnlineCourse.showDetailsLesson\">\n" +
    "										  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "										</li>								\n" +
    "									</ul>\n" +
    "									\n" +
    "									<div class='text-muted navbar-btn' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 1\">\n" +
    "											<strong>{{'Article Content'|translate}}</strong>\n" +
    "											<p ng-bind-html='OnlineCourse.article_content' class=\"well navbar-btn\"></p>\n" +
    "									</div>	\n" +
    "									<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 3\">											\n" +
    "											<div class=\"alert alert-info\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 1\">\n" +
    "												<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "											</div>\n" +
    "											<div class=\"alert alert-danger\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 0 && OnlineCourse.is_lesson_ready_to_view !== 1\">\n" +
    "												<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "											</div>\n" +
    "											<video id=\"video\" ng-src=\"{{OnlineCourse.video_url}}\" controls=\"true\" ng-if=\"OnlineCourse.is_lesson_ready_to_view === 1\"></video>\n" +
    "									</div>\n" +
    "									<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 4\">											\n" +
    "										<p class=\"videoWrapper\" ng-bind-html=\"OnlineCourse.embed_code | to_trusted\"></p>			\n" +
    "									\n" +
    "									</div>\n" +
    "									<div class=\"col-xs-12 clearfix \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItemLesson && currentLessonView === 'edit'  && OnlineCourse.showDetailsLesson\">									\n" +
    "									<div class=\"panel well-sm clearfix \">\n" +
    "										<video-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}'  ng-if=\"OnlineCourse.online_lesson_type_id === 3 && \n" +
    "$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\"  updateparent=\"model.getOnlineCourses()\" ></video-lessons-form>\n" +
    "										<video-external-embed-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 4 && $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "										<article-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 1 && $root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "										<downloadable-file-lessons-form course='{{courseID}}' lesson-id='{{OnlineCourse.id}}' action='edit'  ng-if=\"OnlineCourse.online_lesson_type_id === 5 && $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>		\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>							\n" +
    "							\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<!-- lesson and chapter add section -->						\n" +
    "					<div class=\"navbar-btn clearfix\">			\n" +
    "							<div class=\"well-lg navbar-btn\">\n" +
    "								<div class=\"well-lg clearfix\"></div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<a class=\"btn btn-info btn-block btn-lg navbar-btn\" href=\"#\" ng-click=\"model.addChapterClick($event)\" ng-disabled=\"model.addsection === true\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Chapter'|translate}}</a>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<a class=\"btn btn-primary btn-block btn-lg navbar-btn\" href=\"#\" ng-click=\"model.addLesson($event)\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Lesson'|translate}}</a>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"col-xs-12 clearfix  navbar-btn\" ng-show=\"model.addsection === true\">							\n" +
    "								<div class=\"panel panel-default well-sm\">				\n" +
    "									<form role=\"form\" name=\"chapter_add\" class=\"form-horizontal clearfix\" ng-submit=\"model.addChapter($event)\">		\n" +
    "										<div class=\"form-group\" >\n" +
    "											<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "												<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "												<div class=\"input-group\">			\n" +
    "														<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.AddOnlineChapter.name\" required maxlength=\"50\">\n" +
    "														<span class=\"input-group-addon\">{{model.AddOnlineChapter.name.length}}</span>																						\n" +
    "												</div>\n" +
    "												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"form-group\" >\n" +
    "											<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "												<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>\n" +
    "													<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.AddOnlineChapter.description\" maxlength=\"150\"></textarea>												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"clearfix\">\n" +
    "											<div class=\"text-center\">\n" +
    "												<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "												<input type=\"submit\" ng-disabled=\"disableButton\" class=\"btn btn-primary\" id=\"section_save\"  value=\"{{'Save'|translate}}\" >\n" +
    "												<a href=\"#\" ng-click=\"model.addChapterCancel($event)\" class=\"\">{{'Cancel'|translate}}</a>\n" +
    "											 </div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "							<div class=\"col-xs-12 clearfix  navbar-btn lessonTypes\" ng-show=\"currentView === 'add'\">									\n" +
    "									<div class=\"panel panel-default well-sm clearfix\">\n" +
    "										<a href=\"#\" class=\"navbar-btn pull-right text-primary add-lession-cancel\" ng-click=\"model.cancelAddLesson($event);\" >{{'Cancel'|translate}}</a>\n" +
    "										<video-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-lessons-form>\n" +
    "										<video-external-embed-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "										<article-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "										<downloadable-file-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\"  updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>						\n" +
    "									</div>\n" +
    "							</div>\n" +
    "							<div class=\"well-lg\"></div>\n" +
    "						</div>\n" +
    "					</div>						    					  \n" +
    "				</div>	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseDangeZone.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseDangeZone.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"danger_zone\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{model.courseDangerZone.title}}</h3>									\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div class=\"well-lg panel clearfix\">\n" +
    "					<p ng-bind-html=\"model.courseDangerZone.content\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseFeedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseFeedback.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"course_feedback\">\n" +
    "				<div class=\"panel well-sm\">					\n" +
    "					<p ng-bind-html=\"model.courseFeedback.content\"></p>\n" +
    "				</div>\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseGoals.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseGoals.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"course_goals\">	 \n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Course Goals'|translate}}</h3>\n" +
    "						<span>{{'Set your audience, what students will learn, and what they need in order to be successful'|translate}}.</span>\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix navbar-btn\" ng-submit=\"model.goalsSave()\" name=\"manage_course_goals\">											\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Instructional Level'|translate}}*</strong></label>							\n" +
    "								</div>	\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "								<div class=\"radio radio-inline\" ng-repeat=\"InstructionLevels in model.InstructionLevels\" ng-click='model.courseGoals.instructional_level_id = InstructionLevels.id'>\n" +
    "									<label for=\"{{InstructionLevels.name}}\"><input type=\"radio\" value=\"{{InstructionLevels.id}}\" id=\"Beginner_Level_{{InstructionLevels.id}}\" name=\"course_Level\" ng-model=\"model.courseGoals.instructional_level_id\" required>\n" +
    "									{{InstructionLevels.name}}</label>\n" +
    "								</div>																\n" +
    "								<div class=\"clearfix\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'At the end of my course, students will be able to...'|translate}}</strong></label>\n" +
    "								<p>{{'Start with a verb. Include details on specific skills students will learn and where students can apply them.'|translate}}</p>\n" +
    "								</div>					\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseGoals.students_will_be_able_to\" name=\"students_will_be_able_to\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Who should take this course? Who should not?'|translate}}</strong></label>\n" +
    "								<p>{{'Students appreciate instructors who set the right expectations by telling them what specific student needs they are solving, who the course is best suited for, and who it is NOT for.'|translate}}</p>\n" +
    "								</div>\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseGoals.who_should_take_this_course_and_who_should_not\" name=\"who_should_take_this_course_and_who_should_not\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'What will students need to know or do before starting this course?'|translate}}</strong></label>\n" +
    "								<p>{{'What materials/software do the students need and what actions do they have to perform before the course begins?'|translate}}</p>\n" +
    "								</div>	\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular  ng-model=\"model.courseGoals.what_actions_students_have_to_perform_before_begin\" name=\"what_actions_students_have_to_perform_before_begin\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\"></div>\n" +
    "								</div>\n" +
    "								\n" +
    "							</div>\n" +
    "							\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseHelp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseHelp.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"help\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{model.courseHelp.title}}</h3>					\n" +
    "					</div>					\n" +
    "				</div>	\n" +
    "				<div class=\"navbar-btn panel well-sm clearfix\">\n" +
    "					<p ng-bind-html=\"model.courseHelp.content\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseImage.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div  class=\"navbar-default tab-pane active\" id=\"course_image\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Image'|translate}}</h3>\n" +
    "					</div>\n" +
    "					\n" +
    "				</div>				\n" +
    "				<div class=\"panel clearfix well-sm\">\n" +
    "					<span class=\"navbar-btn\">{{'Cover Preview'|translate}}:*</span>\n" +
    "					<div class=\"thumbnail clearfix\">\n" +
    "							<!-- course image when is_from_mooc_affiliate false -->\n" +
    "						<div ng-if=\"model.courseImage.is_from_mooc_affiliate !== 1\">\n" +
    "							<a ng-if=\"model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/{{model.courseImage.image_hash}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"!model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						<!-- course image when is_from_mooc_affiliate true -->\n" +
    "						<div ng-if=\"model.courseImage.is_from_mooc_affiliate === 1\" >							\n" +
    "							<a ng-if=\"model.courseImage.course_image && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{model.courseImage.course_image}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"!model.courseImage.course_image  && preview_picture_filename === ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "							<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "								<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"panel-body\">\n" +
    "							<p>{{'A good course image is critical to a course'|translate}}'{{'s success. It should grab the attention of the viewer and help them understand the essence of what the course has to offer.'|translate}}</p>						\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					\n" +
    "					<div class=\"well-lg\">\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_image\"  ng-submit=\"model.saveCourseImage()\">		\n" +
    "							<div class=\"form-group\">\n" +
    "								<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_image\">{{'Add/Change Image'|translate}}:</label>\n" +
    "								<div class=\"navbar-btn visible-xs clearfix\"></div>\n" +
    "								<div class=\"col-md-9 col-sm-9\">\n" +
    "									<div class=\"pull-left col-md-12 col-sm-12 col-xs-12\" ng-init=\"beforeUpload=true; afterUpload= false; duringUpload= false;\">\n" +
    "										<!--<span class=\"\">\n" +
    "										<i class=\"fa fa-upload\" ng-show=\"beforeUpload\"></i>\n" +
    "										<i class=\"fa fa-spinner fa-spin\" ng-show=\"duringUpload\"></i>\n" +
    "										<i class=\"fa fa-check\" ng-show=\"afterUpload\"></i>\n" +
    "										Upload</span>-->\n" +
    "										<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" required onchange=\"angular.element(this).scope().uploadFile(this.files)\">\n" +
    "										<span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_image_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"course_image_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "									<input type=\"button\" class=\"btn btn-primary btn-lg\" ng-click=\"model.uploadCancel()\"  value=\"Cancel\"  ng-show=\"duringUpload\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCoursePrice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCoursePrice.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar_default tab-pane active\" id=\"price_coupons\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3 class=\"text-default\">{{'Price'|translate}}</h3>\n" +
    "						<span class=\"text-default\">{{'Set the price of your course.'|translate}}</span>						\n" +
    "					</div>					\n" +
    "				</div>\n" +
    "				<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "				<form role=\"form\" class=\"form-horizontal panel clearfix\" name=\"manage_course_price\" ng-submit='model.priceSave()'>			\n" +
    "					<div class=\"form-group navbar-btn\" ng-class=\"{ 'has-error' : manage_course_price.price.$invalid && manage_course_price.price.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_price\">{{'Price'|translate}}<span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">&nbsp;({{$root.settings['site.currency_symbol']}})</span>\n" +
    "						<span ng-if=\"$root.settings['site.currency_symbol'] === ''\">&nbsp;({{$root.settings['site.currency_code']}})</span></label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"number\" class=\"form-control\" id=\"course_price\" name=\"price\" placeholder=\"{{'Price'|translate}}\" ng-model=\"model.coursePrice.price\" min=0 max=\"{{$root.settings['course.max_course_fee']}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"manage_course_price.price.$dirty\" ng-messages=\"manage_course_price.price.$error\">\n" +
    "								<div ng-message=\"max\">{{'You can set price upto '|translate}} <span><amount-display amount=\"{{$root.settings['course.max_course_fee']}}\" fraction='0' is-course-price='no'></amount-display></span></div>\n" +
    "							</div>			\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"well well-sm clearfix\">\n" +
    "						<div class=\"pull-right\">\n" +
    "							<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "							<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "				<div class=\"well-lg panel text-center clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1\">{{'Site is not enabled any payment option. So this course will be free access.' | translate}}\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCoursePromoVideo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCoursePromoVideo.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">	\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "			<div class=\"navbar-default tab-pane active\" id=\"promo_video\">\n" +
    "				<div class=\"panel\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Promo Video'|translate}}</h3>\n" +
    "						<p>{{'Add a promotional video to your course.'|translate}}</p>											\n" +
    "					</div>	\n" +
    "				</div>				\n" +
    "				<div class=\"panel clearfix well-sm\">\n" +
    "					<span class=\"navbar-btn\">{{'Video Preview'|translate}}:*</span>\n" +
    "					<div class=\"thumbnail clearfix\">	\n" +
    "						<div ng-if=\"model.courseVideo.video_url && model.courseVideo.is_promo_video_convert_error === 0 && model.courseVideo.is_promo_video_converting_is_processing === 0\">\n" +
    "							<video id=\"video\" ng-src=\"{{model.courseVideo.video_url}}\" controls=\"true\" ></video>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"alert alert-info\" ng-if=\"model.courseVideo.is_promo_video_converting_is_processing === 1\">\n" +
    "							<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"alert alert-danger\" ng-if=\" model.courseVideo.is_promo_video_converting_is_processing === 0 && model.courseVideo.is_promo_video_convert_error === 1\">\n" +
    "							<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "						</div>\n" +
    "						<h3 class=\"text-primary\"><span>{{'Explore our second-by-second researched recipe for creating the perfect promo video'|translate}}</span></h3>\n" +
    "						<div class=\"panel-body\">\n" +
    "							<p><strong>{{'Don\\'t forget to add a promo video!'|translate}}</strong></p>\n" +
    "							<p>{{'Students who watch a well-made promo video are 5X more likely to enroll in your course. We\\'ve seen that statistic go up to 10X for exceptionally awesome videos. Learn how to make yours awesome'|translate}}!</p>							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"well-lg\">\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_provideo\" ng-submit=\"model.videoSave()\">		\n" +
    "							<div class=\"form-group\">\n" +
    "								<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_video\">{{'Add/Change Video'|translate}}:</label>\n" +
    "								<div class=\"col-md-8 col-sm-9\">\n" +
    "									<div class=\"alert alert-warning\">\n" +
    "										<p><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'Should be 720p minimum with clear lighting, composition, and a steady camera exported in 16:9 format.'|translate}}</p>\n" +
    "										<p ng-if=\"$root.settings['video.max_size_to_allow_video_file'] !== ''\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'File size should be lesser than'|translate}} {{$root.settings['video.max_size_to_allow_video_file'] | bytes}}</p>\n" +
    "									</div>						\n" +
    "									<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" onchange=\"angular.element(this).scope().uploadVideo(this.files)\" required=\"\" ng-model=\"model.courseVideo.promo_video\"/>	\n" +
    "									<span class=\"text-danger help-block\">{{'Allowed extensions: mov, mpeg4, avi, wmv, mpeg, flv, 3gpp, webm, mp4'|translate}}</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"course_video_save\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_video_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"course_video_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/manageCourseSummary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/manageCourseSummary.tpl.html",
    "<section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"container\">			\n" +
    "		<course-navbar></course-navbar>		\n" +
    "		<div class=\"\">\n" +
    "		<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "			<div  class=\"navbar-default tab-pane active\" id=\"course_summary\">\n" +
    "				<div class=\"panel well-sm\">					\n" +
    "					<div class=\"list-header text-center\">\n" +
    "						<h3>{{'Course Summary'|translate}}</h3>\n" +
    "						<span>{{'Highlight what the course covers, how it is taught, benefits of course and why students should enroll.'|translate}}</span>\n" +
    "					</div>	\n" +
    "					<div class=\"well-lg clearfix\">\n" +
    "						\n" +
    "						<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_summary' ng-submit=\"model.saveCourseSummary(manage_course_summary)\">		\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"col-md-12 col-sm-12\">\n" +
    "									<div text-angular ng-model=\"model.courseSummary.description\"  name=\"summary\"\n" +
    "									ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "									ta-toolbar-class=\"btn-toolbar\" \n" +
    "									ta-toolbar-group-class=\"btn-group\" \n" +
    "									ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "									ta-toolbar-button-active-class=\"active\"\n" +
    "									ta-focussed-class=\"focussed\"\n" +
    "									ta-text-editor-class=\"form-control\"\n" +
    "									ta-html-editor-class=\"form-control\" ta-required='true' required=\"\"></div>	\n" +
    "									<div class=\"alert navbar-btn\" ng-class=\"{'alert-info': !error, 'alert-danger': error}\" role=\"alert\" ng-if='error'>{{info}}</div>\n" +
    "								</div>								\n" +
    "							</div>\n" +
    "							<div class=\"well well-sm clearfix\">\n" +
    "								<div class=\"pull-right\">\n" +
    "									<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "									<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/courses/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/search.tpl.html",
    "<main id=\"main\">\n" +
    "    <section id=\"search-results\">\n" +
    "	  <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "      <div class=\"container\">\n" +
    "	    <div class=\"well-sm\"></div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-3 navbar-btn search-results-sidebar\">\n" +
    "            <form>\n" +
    "                <div class=\"clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "					<h3 class=\"text-muted\">{{'Course Type'|translate}}</h3>\n" +
    "					<div class=\"checkbox clearfix\" ng-if=\"'Paid' !== searchingCoursePrice\">\n" +
    "						<label><a ui-sref=\"CourseSearch({ price: 'Paid', page: 1 })\">\n" +
    "						<input type=\"checkbox\" class=\"\"  ng-checked=\"searchingCoursePrice == 'Paid'\">\n" +
    "						<span class=\"col-xs-9\">{{'Paid'|translate}}</span></a></label>\n" +
    "					</div>\n" +
    "					<div class=\"checkbox clearfix\" ng-if=\"'Paid' === searchingCoursePrice\">\n" +
    "						<label><a ui-sref=\"CourseSearch({ price: '', page: 1 })\">\n" +
    "						<input type=\"checkbox\" class=\"\"  ng-checked=\"searchingCoursePrice == 'Paid'\">\n" +
    "						<span class=\"col-xs-9\"><strong>{{'Paid'|translate}}</strong></span></a></label>\n" +
    "					</div>\n" +
    "					<div class=\"checkbox clearfix\" ng-if=\"'Free' !== searchingCoursePrice\">\n" +
    "						<label><a ui-sref=\"CourseSearch({ price: 'Free', page: 1 })\">\n" +
    "						<input type=\"checkbox\" class=\"\"  ng-checked=\"searchingCoursePrice == 'Free'\">\n" +
    "						<span class=\"col-xs-9\">{{'Free'|translate}}</span></a></label>\n" +
    "					</div>\n" +
    "					<div class=\"checkbox clearfix\"  ng-if=\"'Free' === searchingCoursePrice\">\n" +
    "						<label><a ui-sref=\"CourseSearch({ price: '', page: 1 })\">\n" +
    "						<input type=\"checkbox\" class=\"\"  ng-checked=\"searchingCoursePrice == 'Free'\">\n" +
    "						<span class=\"col-xs-9\"><strong>{{'Free'|translate}}</strong></span></a></label>\n" +
    "					</div>\n" +
    "                </div>\n" +
    "                <hr class=\"list-group-item-text navbar-btn\">\n" +
    "                <div class=\"clearfix\">\n" +
    "					<h3 class=\"text-muted\">{{'All Languages'|translate}}</h3>\n" +
    "					<div class=\"checkbox clearfix\" ng-repeat =\"languages in model.languages\">\n" +
    "					  <label ng-if=\"languages.id !== searchingCourseLanguage\"><a ui-sref=\"CourseSearch({ language:{{languages.id}}, page: 1 })\">\n" +
    "					  <input type=\"checkbox\" class=\"\" ng-checked=\"languages.id == searchingCourseLanguage\">\n" +
    "					  <span class=\"col-xs-9\">{{languages.name}}</span></a></label>                              \n" +
    "					  <label ng-if=\"languages.id === searchingCourseLanguage\"><a ui-sref=\"CourseSearch({ language:'', page: 1 })\">\n" +
    "					  <input type=\"checkbox\" class=\"\" ng-checked=\"languages.id == searchingCourseLanguage\">\n" +
    "					  <span class=\"col-xs-9\"><strong>{{languages.name}}</strong></span></a></label>\n" +
    "					</div>  \n" +
    "			    </div>\n" +
    "                <hr class=\"list-group-item-text navbar-btn\">\n" +
    "                <div class=\"clearfix\">\n" +
    "					<h3 class=\"text-muted\">{{'All Categories'|translate}}</h3>\n" +
    "					<div class=\"checkbox clearfix\" ng-repeat=\"parentCategory in model.common.parentCategories.data\">\n" +
    "					  <label>\n" +
    "						  <a ui-sref=\"CourseSearch({ category_id: {{parentCategory.id}}, page: 1 })\" ng-if=\"parentCategory.id !== searchingCourseCategory\" >\n" +
    "							  <input type=\"checkbox\" class=\"\" ng-checked=\"parentCategory.id == searchingCourseCategory\">\n" +
    "							  <span class=\"col-xs-9\">{{parentCategory.sub_category_name}}</span> \n" +
    "						  </a>\n" +
    "						  <a ui-sref=\"CourseSearch({ category_id: '', page: 1 })\" ng-if=\"parentCategory.id === searchingCourseCategory\">\n" +
    "							  <input type=\"checkbox\" class=\"\" ng-checked=\"parentCategory.id == searchingCourseCategory\">\n" +
    "							  <span class=\"col-xs-9\"><strong>{{parentCategory.sub_category_name}}</strong></span> \n" +
    "						  </a>\n" +
    "					  </label>\n" +
    "					</div>\n" +
    "                </div>\n" +
    "				<hr class=\"list-group-item-text navbar-btn\">\n" +
    "                <div class=\"clearfix\">\n" +
    "					<h3 class=\"text-muted\">{{'Instruction Levels'|translate}}</h3>\n" +
    "					<div class=\"checkbox clearfix\" ng-repeat=\"InstructionLevels in model.InstructionLevels\">\n" +
    "					  <label>\n" +
    "						  <a ui-sref=\"CourseSearch({ instructionLevel:{{InstructionLevels.id}}, page: 1 })\"ng-if=\"InstructionLevels.id !== searchingInstructionLevel\">\n" +
    "							  <input type=\"checkbox\" class=\"\" ng-checked=\"InstructionLevels.id == searchingInstructionLevel\">\n" +
    "							  <span class=\"col-xs-9\">{{InstructionLevels.name}}</span> \n" +
    "						  </a>\n" +
    "					  </label>\n" +
    "					  <label>\n" +
    "						  <a ui-sref=\"CourseSearch({ instructionLevel:'', page: 1})\"  ng-if=\"InstructionLevels.id === searchingInstructionLevel\">\n" +
    "							  <input type=\"checkbox\" class=\"\" ng-checked=\"InstructionLevels.id == searchingInstructionLevel\">\n" +
    "							  <span class=\"col-xs-9\"><strong>{{InstructionLevels.name}}</strong></span> \n" +
    "						  </a>\n" +
    "					  </label>\n" +
    "					</div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<div class=\"col-sm-12 navbar-btn\">\n" +
    "				<span class=\"h5\">{{_metadata.total_records}} {{'matches'|translate}}</span>\n" +
    "				<div class=\"btn-group pull-right\" ng-if=\"model.courseLength > 0\">\n" +
    "					<div class=\"dropdown\">			\n" +
    "						<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'popular'\" title=\"{{'Popularity'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" >{{'Popularity'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'reviews'\" title=\"{{'Reviews'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">{{'Reviews'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'id' || !sortValue\" title=\"{{'Newest'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" >{{'Newest'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'ASC'\" title=\"{{'Price: Low to High'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" >{{'Price: Low to High'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'DESC'\" title=\"{{'Price: High to Low'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" >{{'Price: High to Low'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'featured'\" title=\"{{'Featured'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-sm\" >{{'Featured'|translate}}  &nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> </a>\n" +
    "						  <ul class=\"dropdown-menu\">					\n" +
    "							<li><a ui-sref=\"CourseSearch({ sort:'popular', page: 1 })\" title=\"{{'Popularity'|translate}}\">{{'Popularity'|translate}}</a></li>\n" +
    "							<li><a ui-sref=\"CourseSearch({ sort:'reviews', page: 1 })\" title=\"{{'Reviews'|translate}}\"  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">{{'Reviews'|translate}}</a></li>\n" +
    "							<li><a ui-sref=\"CourseSearch({ sort:'id', page: 1 })\" title=\"{{'Newest'|translate}}\">{{'Newest'|translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'ASC', page: 1 })\" title=\"{{'Price: Low to High'|translate}}\">{{'Price: Low to High'|translate}}</a></li>\n" +
    "							<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'DESC', page: 1 })\" title=\"{{'Price: High to Low'|translate}}\">{{'Price: High to Low'|translate}}</a></li>\n" +
    "							<li><a ui-sref=\"CourseSearch({ sort:'featured', page: 1 })\" title=\"{{'Featured'|translate}}\" >{{'Featured'|translate}}</a></li>\n" +
    "						  </ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "				<hr class=\"navbar-btn\">\n" +
    "				<div class=\"clearfix\">\n" +
    "				  <h3 class=\"h4 initialism text-center\">\n" +
    "				  <strong>{{'Courses'|translate}}</strong>\n" +
    "				  </h3>\n" +
    "				  <ul class=\"list-unstyled list-group-item-text course-list\">\n" +
    "					<li ng-repeat=\"courses in model.courses.data\" class=\"thumbnail\"> <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\"  ng-if=\"model.courseLength > 0\">\n" +
    "					  <div class=\"well-sm clearfix\">\n" +
    "						<div class=\"media navbar-left text-center col-sm-3\"> \n" +
    "						<!-- course image when is_from_mooc_affiliate false -->\n" +
    "						<img ng-if=\"courses.image_hash && courses.is_from_mooc_affiliate !== 1\" class=\"img-responsive \" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/{{courses.image_hash}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/> \n" +
    "						<img ng-if=\"!courses.image_hash && courses.is_from_mooc_affiliate !== 1\" class=\"img-responsive \" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/>\n" +
    "						\n" +
    "						<!-- course image when is_from_mooc_affiliate true -->	\n" +
    "						<img ng-if=\"courses.course_image && courses.is_from_mooc_affiliate === 1\"  class=\"img-responsive \" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{courses.course_image}}\" alt=\"[Image: {{courses.title}}]\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/>						\n" +
    "						<img ng-if=\"!courses.course_image && courses.is_from_mooc_affiliate === 1\" class=\"img-responsive \" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\"/>\n" +
    "						\n" +
    "						</div>\n" +
    "						<div class=\"media-body col-sm-9 text-muted\">\n" +
    "						<div class=\"navbar-btn visible-xs\"></div>\n" +
    "						  <h4 class=\"list-group-item-heading\">{{courses.title}}</h4>\n" +
    "						  <h5 class=\"text-muted\">{{courses.subtitle}}</h5>\n" +
    "						  <h6 class=\"text-primary\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\">{{courses.displayname}}&nbsp;<span ng-show=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1 && courses.designation\" class=\"text-muted\">-&nbsp;{{courses.designation}}</span></h6>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  </a> </li>\n" +
    "				   \n" +
    "				  </ul>\n" +
    "				  <div class=\"text-center\" ng-if=\"model.courseLength === 0\" >						\n" +
    "						<h2 class=\"text-success\" ng-if=\"!noFiltersUsed\">{{'Your search did not match any courses.'|translate}}</h2>\n" +
    "						<h2 class=\"text-success\" ng-if=\"noFiltersUsed\">{{'No courses available.'|translate}}</h2>					\n" +
    "				  </div>\n" +
    "				  <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "					<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#search-results')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "				  </div>          \n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "			<hr class=\"navbar-btn\">\n" +
    "		</div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "	<section ng-show=\"model.loading === false\">\n" +
    "		<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	</section>\n" +
    "  </main>\n" +
    "  <!--main section End-->");
}]);

angular.module("themes/graspr/views/courses/teaching.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/teaching.tpl.html",
    "<section>\n" +
    "	<div class=\"container\">	\n" +
    "		<instructor-courses theme-name ='graspr' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"></instructor-courses>\n" +
    "	</div>			\n" +
    "</section>\n" +
    "");
}]);

angular.module("themes/graspr/views/courses/viewCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/viewCourse.tpl.html",
    "<main id=\"main\">\n" +
    "<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "<section>\n" +
    "<div class=\"container\">\n" +
    "<div class=\"well-sm\"></div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"thumbnail list-group-item-text clearfix well-lg\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"clearfix\">\n" +
    "	  <div class=\"row\">\n" +
    "		<div class=\"col-sm-6 course-title\">		\n" +
    "		  <h2 class=\"h1\">{{model.course.title}}</h2>\n" +
    "		  <p>{{model.course.subtitle}}</p>\n" +
    "		</div>\n" +
    "		<!-- course image when is_from_mooc_affiliate false and promo video not enabled -->\n" +
    "		<div class=\"col-sm-6\" ng-if=\"!model.course.video_url && model.course.is_from_mooc_affiliate !== 1\">\n" +
    "		  <div class=\"well-lg visible-sm hidden-xs\"></div>	  \n" +
    "			<img ng-if=\"model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/big_thumb/Course/{{model.course.image_hash}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "			<img ng-if=\"!model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "		</div>\n" +
    "		 <!-- course image when is_from_mooc_affiliate true -->\n" +
    "		<div class=\"col-sm-6\" ng-if=\"model.course.is_from_mooc_affiliate === 1\" >		\n" +
    "			<img ng-if=\"model.course.course_image\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{model.course.course_image}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "			<img ng-if=\"!model.course.course_image\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "	   </div>\n" +
    "		 <!-- course image when is_from_mooc_affiliate false and promo video enabled and videolessons plugin should be enabled -->\n" +
    "		<div class=\"promo-video col-sm-6\" ng-if=\"model.course.video_url && model.course.is_promo_video_convert_error === 0 && model.course.is_promo_video_converting_is_processing === 0 && model.course.is_from_mooc_affiliate !== 1 && $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\">\n" +
    "			<video id=\"video\"  ng-src=\"{{model.course.video_url}}\" controls=\"true\"></video>\n" +
    "		</div>\n" +
    "		<!-- course image when promo video failed or videolessonplugin or promo video enabled settings disabled -->\n" +
    "		<div class=\"col-sm-6\" ng-if=\"(model.course.video_url && model.course.is_promo_video_convert_error !== 0 || model.course.is_promo_video_converting_is_processing !== 0) || ($root.settings['site.enabled_plugins'].indexOf('VideoLessons') === -1 && model.course.video_url) || ($root.settings['video.is_enabled_promo_video'] === '0' && model.course.video_url) && model.course.is_from_mooc_affiliate !== 1\">	\n" +
    "			<img ng-if=\"model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/big_thumb/Course/{{model.course.image_hash}}\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "			<img ng-if=\"!model.course.image_hash\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.course.title}}]\" title=\"{{model.course.title}}\" class=\"img-responsive\" />\n" +
    "		</div>\n" +
    "		\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "	<hr />\n" +
    "	<div class=\"clearfix\">\n" +
    "	  <div class=\"row\">\n" +
    "		<div class=\"col-md-8 col-sm-7 max-img\">\n" +
    "		  <div class=\"clearfix\" ng-show='model.course.description !== null && model.course.description'>\n" +
    "			<h3>{{'About the Course'|translate}}</h3>\n" +
    "			<p class=\"\" ng-bind-html=\"model.course.description\"></p>\n" +
    "		  </div>\n" +
    "		 <div class=\"clearfix\">			\n" +
    "			<online-lessons></online-lessons>			\n" +
    "		 </div>\n" +
    "		 <div class=\"clearfix\">\n" +
    "			<h3 ng-show=\"WhatActionsStudentsHaveToPerformBeforeBegin !== '' && WhatActionsStudentsHaveToPerformBeforeBegin !== null\">{{'What are the requirements?'|translate}}</h3>\n" +
    "			<p class=\"\" ng-bind-html=\"WhatActionsStudentsHaveToPerformBeforeBegin\"></p>\n" +
    "		 </div>\n" +
    "		<div class=\"clearfix\">\n" +
    "		  <h3 ng-show=\"studentsWillBeAbleTo !== '' && studentsWillBeAbleTo !== null\">{{'What am I going to get from this course?'|translate}}</h3>\n" +
    "		  <p class=\"\" ng-bind-html=\"studentsWillBeAbleTo\"></p>\n" +
    "		</div>\n" +
    "		<div class=\"clearfix\">\n" +
    "		  <h3 ng-show=\"whoShouldTakeThisCourseAndWhoShouldNot !== '' && whoShouldTakeThisCourseAndWhoShouldNot !== null\">{{'What is the target audience?'|translate}}</h3>\n" +
    "		   <p class=\"\" ng-bind-html=\"whoShouldTakeThisCourseAndWhoShouldNot\"></p>\n" +
    "		</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-4 col-sm-5 navbar-btn\">\n" +
    "		  <div class=\"col-sm-12 navbar-right\">\n" +
    "			<div class=\"clearfix\">\n" +
    "			<div class=\"clearfix navbar-btn\">\n" +
    "				 <course-wishlist course-wishlist='model.course' wishlist-type='heartWithText' wishlist-label={{'Wishlist'|translate}} wishlisted-label={{'Wishlisted'|translate}}  ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\" class=\"\"></course-wishlist>			  \n" +
    "			</div>			\n" +
    "			<payment-buttons user-id=\"{{model.course.user_id}}\" btn-link=\"{{model.course.mooc_affiliate_course_link}}\" instruction-level='{{model.course.instructional_level_id}}' title='{{model.course.title}}' slug='{{model.course.slug}}' course-price='{{model.course.price}}' course-id='{{model.course.id}}' ng-if='model.course.id'></payment-buttons>\n" +
    "			<div class=\"navbar-btn\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\" ng-if=\"model.course.is_from_mooc_affiliate !== 1\">\n" +
    "			  <h3 class=\"list-group-item-heading\">{{'Course at a Glance'|translate}}</h3>\n" +
    "			  <ul class=\"list-unstyled clearfix navbar-btn\">\n" +
    "				<li ng-if=\"model.course.instructional_level_name\" class=\"clearfix\"><span class=\"media pull-left\"><i class=\"fa fa-line-chart\"></i></span><span class=\"media-body col-xs-11\"> {{model.course.instructional_level_name}}</span></li>\n" +
    "				<li ng-if=\"model.course.language_name\" class=\"clearfix\"><span class=\"media pull-left\"><i class=\"fa fa-list-alt\"></i></span><span class=\"media-body col-xs-11\"> {{model.course.language_name}}</span></li>\n" +
    "				<li class=\"clearfix\"><span class=\"media pull-left\"><i class=\"fa fa-play-circle fa-lg\"></i></span><span class=\"media-body col-xs-11\">{{model.course.active_online_course_lesson_count}} {{'Lessons'|translate}}</span></li>\n" +
    "				<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">\n" +
    "					<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">\n" +
    "						<span class=\"show navbar-btn\" ng-if=\"model.course.course_user_feedback_count > 0\"> <a href=\"#reviews\" ng-click=\"gotoAnchorLink($event,'reviews',model.course.course_user_feedback_count)\">{{'Reviews'|translate}}</a></span>\n" +
    "						<rating-stars average-rating='{{model.course.average_rating}}' ng-click=\"gotoAnchorLink($event,'reviews',model.course.course_user_feedback_count)\" ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars> \n" +
    "						<p><span ng-click=\"gotoAnchorLink($event,'reviews',model.course.course_user_feedback_count)\" class=\"text-muted\">{{model.course.course_user_feedback_count}} {{'ratings'|translate}} {{model.course.course_user_count}} {{'students enrolled'|translate}}</span></p>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			  </ul>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\" ng-if=\"model.user_profile && model.course.user_id\">\n" +
    "				<h3>{{'Instructors'|translate}}</h3>\n" +
    "				<div class=\"media pull-left list-group-item-heading\"> \n" +
    "				  <profile-image  user-image-hash='model.course.user_image_hash' user-display-name='{{model.course.displayname}}' user-profile-id='model.course.user_id' ng-if='model.course' user-profile-thumb='normal_thumb'></profile-image>\n" +
    "				</div>\n" +
    "				<div class=\"media-body col-sm-8\">\n" +
    "				  <profile-name  user-display-name='model.course.displayname' user-profile-id='model.course.user_id' user-designation-text='{{model.course.designation}}' ng-if='model.course' user-designation='yes'></profile-name>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-if=\"model.course.user_id\">\n" +
    "				<ul class=\"list-inline\">\n" +
    "					<li ng-show=\"model.user_profile.twitter_profile_link\"><a href=\"{{model.user_profile.twitter_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.google_plus_profile_link\"><a href=\"{{model.user_profile.google_plus_profile_link}}\" target=\"_blank\" class=\"text-muted\"> <span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-google-plus fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "					<li ng-show=\"model.user_profile.facebook_profile_link\"><a href=\"{{model.user_profile.facebook_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "					<li ng-show=\"model.user_profile.youtube_profile_link\"><a href=\"{{model.user_profile.youtube_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-youtube fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.website\"><a href=\"{{model.user_profile.website}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-globe fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "					<li ng-show=\"model.user_profile.linkedin_profile_link\"><a href=\"{{model.user_profile.linkedin_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\" ng-if=\"model.course.category_name\">\n" +
    "			  <h3>{{'Categories'|translate}}</h3>\n" +
    "			  <ul class=\"list-unstyled\">\n" +
    "				<li><a href=\"#!/courses/category/{{model.course.parent_category_id }}/{{model.course.parent_category_name|slugify}}\" title=\"{{model.course.parent_category_name}}\">{{model.course.parent_category_name}}</a>\n" +
    "				<li>\n" +
    "				<li><a href=\"#!/courses/category/{{model.course.category_id }}/{{model.course.category_name|slugify}}\" title=\"{{model.course.category_name}}\">{{model.course.category_name}}</a></li>\n" +
    "			  </ul>\n" +
    "			</div>\n" +
    "			<div class=\"navbar-btn\">\n" +
    "			  <social-share share-title='{{model.course.title}}' share-link = '#!/course/{{model.course.id}}/{{model.course.slug}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('SocialShare') > -1\"></social-share> \n" +
    "			</div>\n" +
    "			<div banner position=\"courseBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\" class=\"max-img\"></div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	   <hr />\n" +
    "	  <div class=\"clearfix\" id=\"reviews\">\n" +
    "		<div class=\"row\">\n" +
    "			<course-feedback course-id='{{model.course.id}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"></course-feedback>	\n" +
    "		</div>				\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	  </div>\n" +
    "	  <div class=\"clearfix\">\n" +
    "		<div class=\"row\">\n" +
    "		  <related-courses-by-category ng-if=\"model.course.category_id && model.course.id\" user_id=\"{{model.course.user_id}}\" course-id=\"{{model.course.id}}\" category-id=\"{{model.course.category_id}}\" limit=\"3\"></related-courses-by-category>  \n" +
    "		</div>\n" +
    "		<div class=\"well-sm\"></div>		\n" +
    "	   </div>\n" +
    "	   <!-- comments section -->\n" +
    "		<div class=\"clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Comments') > -1 && ($root.settings['facebook.is_enabled_facebook_comment'] === '1'|| $root.settings['disqus.is_enabled_disqus_comment'] === '1')\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<facebook-comments ng-if=\"$root.settings['facebook.comments.api_key'] && $root.settings['facebook.is_enabled_facebook_comment'] === '1'\"></facebook-comments>			\n" +
    "			<dir-disqus config=\"disqusConfig\" ng-if=\"model.course.id && $root.settings['disqus.comments.shortname'] && $root.settings['disqus.is_enabled_disqus_comment'] === '1'\" ></dir-disqus>\n" +
    "		</div>				\n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</section>\n" +
    "<section ng-show=\"model.loading === false\">\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</section>\n" +
    "</main>\n" +
    "");
}]);

angular.module("themes/graspr/views/courses/wishlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/courses/wishlist.tpl.html",
    "<section id=\"wishlist-courses\">\n" +
    "	<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<aside class=\"col-sm-3 col-xs-12\">\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "			<ul class=\"nav nav-pills nav-stacked list-group list-group-item-text\" role=\"tablist\">\n" +
    "				<li role=\"presentation\" class=\"list-group-item well-sm active\" text-muted >\n" +
    "					<a href=\"#enrollment\"  showtab=\"\" title=\"{{'Enrollments'|translate}}\" role=\"tab\" >{{'Enrollments'|translate}}\n" +
    "					</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</aside>\n" +
    "		<div class=\"tab-content detail-block\">\n" +
    "			<div role=\"tabpanel\" class=\"tab-pane active\" id=\"enrollment\">		\n" +
    "				    <div class=\"col-sm-9 col-xs-12\">  \n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"well-sm\"></div><div class=\"well-sm\"></div>\n" +
    "						<span class=\"h3 text-muted\">{{'My Courses'|translate}}</span>\n" +
    "						 <div class=\"navbar-btn\">\n" +
    "							<ul class=\"list-inline navbar-btn nav nav-tabs\" role=\"tablist\">\n" +
    "							  <li class=\"\"><a href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" class=\"text-muted\" aria-controls=\"learning\" role=\"tab\">{{'Current'|translate}}</a></li>\n" +
    "							  <li class=\"\"><a ui-sref=\"myCoursesLearning({ ordering: 'archived' })\" class=\"text-muted\" title=\"{{'Archived'|translate}}\" aria-controls=\"teaching\" role=\"tab\">{{'Archived'|translate}}</a></li>\n" +
    "							  <li class=\"active\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" class=\"text-muted\" aria-controls=\"wishlist\" role=\"tab\">{{'Wishlist'|translate}}</a></li>\n" +
    "							</ul>\n" +
    "						 </div>\n" +
    "					</div>\n" +
    "			    <div class=\"tab-content detail-block\">\n" +
    "					<div role=\"tabpanel\" class=\"tab-pane active\" id=\"tab1\">				\n" +
    "						<div class=\"container\">\n" +
    "							<div class=\"col-md-9 col-sm-9 col-xs-12 col-lg-offset-3 col-md-offset-3  col-sm-offset-3 col-xs-offset-0\">  \n" +
    "								<div class=\"well-sm\"></div>\n" +
    "								<div class=\"clearfix\"  ng-if=\"_metadata.total_records > 0\">\n" +
    "									<ul class=\"list-unstyled navbar-btn list-group-item-text course-list\">\n" +
    "										<li ng-repeat=\"wishlistCourses in model.wishlistCourses.data\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\" id=\"Wishlist_elements_{{wishlistCourses.id}}\" class=\"thumbnail\">\n" +
    "											<div class=\"well-sm clearfix\">\n" +
    "												<div class=\"media navbar-left text-center col-sm-3\">\n" +
    "													<!-- course image when is_from_mooc_affiliate false -->\n" +
    "													<a ng-if=\"wishlistCourses.image_hash && wishlistCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/{{wishlistCourses.image_hash}}\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" class=\"img-responsive center-block\" /></a>\n" +
    "													<a ng-if=\"!wishlistCourses.image_hash && wishlistCourses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" class=\"img-responsive center-block\" /></a>                  \n" +
    "													\n" +
    "													<!-- course image when is_from_mooc_affiliate true -->\n" +
    "													<a ng-if=\"wishlistCourses.course_image && wishlistCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{wishlistCourses.course_image}}\"  alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" class=\"img-responsive center-block\" /></a>                  \n" +
    "													<a ng-if=\"!wishlistCourses.course_image && wishlistCourses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\"> <img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\" alt=\"[Image: {{wishlistCourses.course_title}}]\" title=\"{{wishlistCourses.course_title}}\" class=\"img-responsive center-block\" /></a>                  \n" +
    "												</div>\n" +
    "												<div class=\"media-body col-md-9 text-muted\">\n" +
    "													<div class=\"pull-right dropdown\"> <a href=\"javascript:void(0)\" title=\"{{'Options'|translate}}\" class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a>\n" +
    "														<ul class=\"dropdown-menu initialism\">\n" +
    "														  <li><a href=\"#\" title=\"{{'Unfavourite'|translate}}\" title=\"{{'Unfavourite'|translate}}\"  ng-click=\"model.deleFavourites(wishlistCourses.id, $event)\" class=\"text-muted\"  >{{'Unfavourite'|translate}}</a></li>											 \n" +
    "													 </div>										\n" +
    "													<h4 class=\"list-group-item-heading\"> <a href=\"#!/course/{{wishlistCourses.course_id}}/{{wishlistCourses.course_slug}}\" title=\"{{wishlistCourses.course_title}}\" class=\"text-muted\">{{wishlistCourses.course_title}}</a></h4>\n" +
    "													<div class=\"clearfix\"><span>{{wishlistCourses.subtitle}}</span></div>\n" +
    "													<div class=\"clearfix navbar-btn list-group-item-text\"></div>\n" +
    "													<span ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\">\n" +
    "													<profile-name user-display-name='wishlistCourses.teacher_name' user-profile-id='wishlistCourses.teacher_user_id' ng-if='wishlistCourses' user-name-class=\"text-muted\"></profile-name></span>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "								<div class=\"clearfix col-xs-12\" ng-if=\"_metadata.total_records === 0\">\n" +
    "									<div class =\"thumbnail well-lg\" >\n" +
    "										<p>{{'You\\'re not watching any courses!'|translate}}</p>\n" +
    "										<a href=\"#!/courses/search\" class=\"btn btn-primary\">{{'Find a Course'|translate}}</a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"well-sm\"></div>\n" +
    "								<div class=\"paging clearfix col-xs-12 text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "								  <pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#wishlist-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		<div class=\"tab-content detail-block\">\n" +
    "			<div role=\"tabpanel\" class=\"tab-pane\" id=\"accomplishment\">	\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/home/home.tpl.html",
    "<main id=\"main\">\n" +
    "    <!--Banner section start-->\n" +
    "	<section id=\"banner-carousel\">\n" +
    "		<!-- Wrapper for slides -->\n" +
    "		<carousel interval=\"myInterval\" class=\"slide\" no-wrap=\"noWrapSlides\">\n" +
    "			<slide active=\"active\">\n" +
    "				<img src=\"assets/img/slide1.png\" alt=\"[Image: {{'Image1'|translate}}]\"  class=\"img-responsive center-block\">				\n" +
    "			</slide>\n" +
    "			<slide>\n" +
    "				<img src=\"assets/img/slide2.png\" alt=\"[Image: {{'Image1'|translate}}]\"  class=\"img-responsive center-block\">				\n" +
    "			</slide>\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<div class=\"carousel-caption\">\n" +
    "				<div class=\"well-sm clearfix\"></div>\n" +
    "				<h2 class=\"h1 navbar-btn text-center\">{{'Take the world\\'s best courses, online.'|translate}}</h2>\n" +
    "				<div class=\"clearfix well-lg\">\n" +
    "					<form class=\"form-inline\" method=\"post\">\n" +
    "						<div class=\"input-group col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0\">\n" +
    "							<input type=\"text\" class=\"form-control input-lg\" placeholder=\"{{'What would you like to learn about?'|translate}}\"  ng-model=\"hsearchVal\" ng-keyup=\"$event.keyCode == 13 ? goToState('CourseSearch', {q: hsearchVal}) : null\" />\n" +
    "							<div class=\"input-group-btn\"> <a ui-sref=\"CourseSearch({q:hsearchVal})\" class=\"btn btn-default input-lg btn-lg\"><i class=\"fa fa-search text-primary\"></i></a> </div>\n" +
    "						</div>\n" +
    "						<!-- /input-group -->\n" +
    "					</form>\n" +
    "					<div class=\"clearfix well-sm\">\n" +
    "						<h4 class=\"list-group-item-text list-group-item-heading text-center lead\"> {{'or'|translate}} <a href=\"#!/courses\" title=\"{{'browse catalog'|translate}}\">\n" +
    "						<span class=\"text-primary\">{{'browse catalog'|translate}}  <i class=\"fa fa-angle-right\"></i></span></a></h4>\n" +
    "						<div class=\"well-lg hidden-sm hidden-xs\"></div>\n" +
    "					</div>\n" +
    "						<div class=\"clearfix well-sm h3\">\n" +
    "							<ul class=\"list-inline small\">\n" +
    "								<li>16,527,829 {{'learners'|translate}}</li>\n" +
    "								<li><span class=\"h3\">.</span></li>\n" +
    "								<li>1,508 {{'courses'|translate}}</li>\n" +
    "								<li><span class=\"h3\">.</span></li>\n" +
    "								<li>140 {{'partners'|translate}}</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		</carousel>		\n" +
    "    </section>\n" +
    "    <!--Banner section End-->\n" +
    "    <!--home-main section Start-->\n" +
    "    <section>\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"well-sm clearfix\"></div>\n" +
    "          <div class=\"clearfix\">\n" +
    "            <h2 class=\"text-center h3 list-group\">{{'Most Popular'|translate}}</h2>\n" +
    "            <home-course filter=\"most_popular\" limit=\"8\"></home-course>\n" +
    "          </div>\n" +
    "          <div class=\"clearfix\">\n" +
    "            <h2 class=\"text-center h3 list-group\">{{'Learner Recommended'|translate}}</h2>\n" +
    "          </div>\n" +
    "		  \n" +
    "		   <home-course filter=\"learner_recommended\" limit=\"8\"></home-course>\n" +
    "          <div class=\"navbar-btn col-xs-12\"><a href=\"#!/courses\" title=\"{{'View all courses'|translate}}\" class=\"btn btn-lg btn-default btn-block\"><span class=\"text-info h5\">{{'View all courses'|translate}}</span></a></div>\n" +
    "        </div>\n" +
    "        <hr class=\"navbar-btn\">\n" +
    "      </div>\n" +
    "    </section>\n" +
    "    <!--home-main section End-->\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</main>");
}]);

angular.module("themes/graspr/views/pages/pages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/pages/pages.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<h2>{{model.page.title}}</h2>\n" +
    "	<p ng-bind-html='model.page.content'></p>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/users/activation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/activation.tpl.html",
    "");
}]);

angular.module("themes/graspr/views/users/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/change_password.tpl.html",
    "<section>\n" +
    "  <div class=\"container\">\n" +
    "	\n" +
    "    <div class=\"well-sm\"></div>\n" +
    "	<div class=\"row\">\n" +
    "	  <div class=\"thumbnail list-group-item-text\">\n" +
    "		<div class=\"well-lg clearfix\">\n" +
    "		  <div class=\"well-sm\"></div>\n" +
    "		  <div class=\"clearfix\">\n" +
    "			<h2 class=\"h1 pull-left list-group-item-heading list-group-item-text\">{{'Reset Password'|translate}}</h2>			\n" +
    "		  </div>\n" +
    "		  <hr/>\n" +
    "		  <div class=\"clearfix\">\n" +
    "			<form method=\"post\" class=\"form-horizontal clearfix\" name=\"changePasswordForm\" ng-submit=\"change_password(changePasswordForm.$valid, user);changePasswordForm.$setPristine()\">\n" +
    "			    <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.old_password.$invalid && changePasswordForm.old_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'Current Password'|translate}}</label>\n" +
    "					<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "						<div class=\"col-sm-11 col-xs-12 row\">\n" +
    "							<input class=\"form-control \" type=\"password\" name=\"old_password\" ng-model=\"user.old_password\" placeholder=\"{{'Current Password'|translate}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.old_password.$dirty\" ng-messages=\"changePasswordForm.old_password.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "							</div>							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.new_password.$invalid && changePasswordForm.new_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'New Password'|translate}}</label>\n" +
    "					<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "						<div class=\"col-sm-11 col-xs-12 row\">\n" +
    "							<input class=\"form-control\" type=\"password\" minlength=\"5\" name=\"new_password\" ng-model=\"user.new_password\" placeholder=\"{{'New Password'|translate}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.new_password.$dirty\" ng-messages=\"changePasswordForm.new_password.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "							  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.confirm_new_password.$invalid && changePasswordForm.confirm_new_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'Re-type New Password'|translate}}</label>\n" +
    "					<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "						<div class=\"col-sm-11 col-xs-12 row\">\n" +
    "							<input class=\"form-control\" type=\"password\" minlength=\"5\" name=\"confirm_new_password\" ng-model=\"user.confirm_new_password\" data-match=\"user.new_password\" placeholder=\"{{'Re-type New Password'|translate}}\" required>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.confirm_new_password.$dirty\" ng-messages=\"changePasswordForm.confirm_new_password.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "							  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "							  <div ng-message=\"match\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"well well-sm clearfix\">\n" +
    "					<div class=\"pull-right\">\n" +
    "						<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "						<button type=\"submit\" ng-disabled=\"changePasswordForm.$invalid || disableButton\" class=\"btn btn-lg btn-primary\" id=\"submit\">{{'Save'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/users/directives/profileImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/directives/profileImage.tpl.html",
    "<a ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a>\n" +
    "<a ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a> \n" +
    "\n" +
    "<img  ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "<img  ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "\n" +
    " ");
}]);

angular.module("themes/graspr/views/users/directives/profileName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/directives/profileName.tpl.html",
    "<h4 class=\"media-heading h5\"> \n" +
    "	<a href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"  class=\"{{model.userNameClass}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" >{{model.userDisplayName}}</a>\n" +
    "	<span title=\"{{model.userDisplayName}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" >{{model.userDisplayName}}</span>\n" +
    "</h4>\n" +
    "<p ng-if=\"model.userDesignation === 'yes' && model.userDesignationText && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\">{{model.userDesignationText}}</p>\n" +
    "");
}]);

angular.module("themes/graspr/views/users/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/forgot_password.tpl.html",
    "<section class=\"clearfix\">\n" +
    "	<div class=\"container\">	\n" +
    "		<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "		<div class=\"panel-body\">\n" +
    "			<h3 class=\"lead text-center text-primary\"><strong>{{'Forgot your password?' | translate}}</strong></h3>\n" +
    "			<hr>\n" +
    "		</div>					\n" +
    "		<div class=\"well-lg panel clearfix\">\n" +
    "			\n" +
    "			<div class=\"alert alert-info\">{{'Please provide the email address. We\\'ll send you an email with new password.' | translate}}</div>\n" +
    "			<form class=\"form-horizontal\" method=\"post\" name=\"forgotPasswordForm\" ng-submit=\"forgot_password(forgotPasswordForm.$valid, user);forgotPasswordForm.$setPristine()\">\n" +
    "				<div class=\"form-group clearfix\" ng-class=\"{ 'has-error' : forgotPasswordForm.email.$invalid && forgotPasswordForm.email.$dirty }\">\n" +
    "					<label class=\"col-md-3 col-sm-3 control-label\" for=\"designation\">{{'Email' | translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control input-lg\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email your email' | translate}}\" required autofocus>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"forgotPasswordForm.email.$dirty\" ng-messages=\"forgotPasswordForm.email.$error\">\n" +
    "							<div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "							<div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"well well-sm clearfix\">\n" +
    "					<div class=\"pull-right\">\n" +
    "						<button type=\"submit\" ng-disabled=\"forgotPasswordForm.$invalid || disableButton\" class=\"btn btn-lg btn-primary\" value=\"{{'Send' | translate}}\">{{'Send' | translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			    <br/>\n" +
    "			    <p class=\"text-center text-muted\">\n" +
    "					<small>{{'Don\\'t have an account yet?'|translate}} <a ng-href=\"#!/users/signup\" >{{'Sign up'|translate}}</a></small>\n" +
    "			    </p>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "		<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/graspr/views/users/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/login.tpl.html",
    "<div class=\" well-lg\" ng-class=\"{'container': currentPageType === 'page'}\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"center-form\" ng-class=\"{'col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0': currentPageType === 'page' ,'panel': currentPageType === 'modal'}\">\n" +
    "      <div class=\"panel-body \">\n" +
    "		<a data-dismiss=\"modal\" ng-click=\"modalClose($event)\" class=\"modalClose\" ng-if=\"currentPageType === 'modal'\"><i class=\"fa fa-lg fa-times-circle close\"></i></a>\n" +
    "        <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "	    <h3 class=\"lead text-center text-primary\"><strong>{{'Login to your'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h3>\n" +
    "		<hr>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-offset-1 col-md-10\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "				<h3 class=\"lead text-center text-primary\">{{'Login with social accounts' | translate}}</h3>\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "				<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-offset-1 col-md-10\">\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "				<div ng-if='!contentInIframe'>  \n" +
    "					<h3 class=\"lead text-center text-primary\">{{'Login with your email' | translate}}</h3>\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<form method=\"post\" name=\"loginForm\">  \n" +
    "						<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : loginForm.email.$invalid && loginForm.email.$dirty }\">\n" +
    "							<input class=\"form-control input-lg\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "							<span class=\"ion-at form-control-feedback\"></span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"loginForm.email.$dirty\" ng-messages=\"loginForm.email.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "							  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : loginForm.password.$invalid && loginForm.password.$dirty }\">\n" +
    "							<input class=\"form-control input-lg\" type=\"password\" name=\"password\" ng-model=\"user.password\" placeholder=\"{{'Password'|translate}}\" required>\n" +
    "							<span class=\"ion-key form-control-feedback\"></span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"loginForm.password.$dirty\" ng-messages=\"loginForm.password.$error\">\n" +
    "							  <div ng-message=\"required\">{{'Password cannot be empty'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<button ng-click=\"loginUser(loginForm.$valid, user);loginForm.$setPristine()\" ng-disabled=\"loginForm.$invalid || disableButton\" class=\"btn btn-lg  btn-block btn-primary\">{{'Log in'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "						<br/>\n" +
    "						<p class=\"text-center text-muted\">\n" +
    "							<small>{{'Don\\'t have an account yet?'|translate}} <a ng-if=\"currentPageType === 'page'\" ng-href=\"#!/users/signup\" >&nbsp;&nbsp;{{'Sign up'|translate}}</a>\n" +
    "							<a ng-if=\"currentPageType === 'modal'\" ng-click=\"goToState('Signup')\" ng-href=\"#!/users/signup\" >&nbsp;&nbsp;{{'Sign up'|translate}}</a>\n" +
    "							</small>\n" +
    "						</p>\n" +
    "						<div class=\"text-center text-muted\">\n" +
    "							<strong>{{'or'|translate}}</strong>\n" +
    "						</div>\n" +
    "						<hr class=\"navbar-btn\">\n" +
    "						<p class=\"text-center text-muted\">\n" +
    "							<small><a ng-href=\"#!/users/forgot_password\" title=\"{{'Forgot Password'|translate}}\">{{'Forgot Password'|translate}}</a></small>\n" +
    "						</p>\n" +
    "					</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>  \n" +
    "		\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/users/logout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/logout.tpl.html",
    "");
}]);

angular.module("themes/graspr/views/users/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/signup.tpl.html",
    "<div class=\" well-lg \" ng-class=\"{'container': currentPageType === 'page'}\">\n" +
    "  \n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"center-form\" ng-class=\"{'col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0': currentPageType === 'page' , 'panel': currentPageType === 'modal'}\">\n" +
    "      <div class=\"panel-body row\">\n" +
    "		<a data-dismiss=\"modal\" ng-click=\"modalClose($event)\" class=\"modalClose\" ng-if=\"currentPageType === 'modal'\"><i class=\"fa fa-lg fa-times-circle close\"></i></a>\n" +
    "        <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "		<h2 class=\"lead text-center text-primary\"><strong>{{'Sign up to'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h2>\n" +
    "		<hr>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0\">		\n" +
    "				<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">\n" +
    "					<h3 class=\"lead text-center text-primary\">{{'Choose Subscription Plan'|translate}}</h3>\n" +
    "						<div class=\"well-sm\" ng-repeat=\"subscriptions in model.SubscriptionsList\" ng-class=\"{ 'bg-success' : model.Subscriptions.id === subscriptions.id  }\" >\n" +
    "							<div class=\"radio\" ng-click=\"model.Subscriptions.id = subscriptions.id;\">\n" +
    "								<div class=\"form-group\">\n" +
    "									<label for=\"{{subscriptions.name}}\" class=\"h4\" ng-class=\"{ 'text-muted' : model.Subscriptions.id !== subscriptions.id  }\" popover-placement=\"top\" popover-html-unsafe=\"{{subscriptions.description}}\">\n" +
    "										<input type=\"radio\" value=\"{{subscriptions.id}}\" id=\"subscriptions_{{subscriptions.id}}\" name=\"subscriptions_Level\" ng-model=\"model.Subscriptions.id\" >\n" +
    "										{{subscriptions.name}} - <amount-display amount='{{subscriptions.price}}' fraction='0' is-course-price='no'> / {{subscriptions.interval_unit}}\n" +
    "									</label>				\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					<hr>\n" +
    "				</div>\n" +
    "				<div class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "					<h3 class=\"lead text-center text-primary\">{{'Sign up with social accounts' | translate}}</h3>\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "				</div>\n" +
    "				<form method=\"post\" name=\"signupForm\">\n" +
    "					<input type=\"hidden\" name=\"subscription_id\" ng-model=\"user.subscription_id\" ng-if=\"subscriptionId && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">					\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<div ng-if='!contentInIframe'>\n" +
    "						<h3 class=\"lead text-center text-primary\">{{'Sign up with with your email' | translate}}</h3>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "					\n" +
    "					  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.displayname.$invalid && signupForm.displayname.$dirty }\">\n" +
    "						<input class=\"form-control input-lg\" type=\"text\" name=\"displayname\" ng-model=\"user.displayname\" placeholder=\"{{'Name'|translate}}\" required autofocus>\n" +
    "						<span class=\"ion-person form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"signupForm.displayname.$dirty\" ng-messages=\"signupForm.displayname.$error\">\n" +
    "						  <div ng-message=\"required\">{{'You must enter your name'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.email.$invalid && signupForm.email.$dirty }\">\n" +
    "						<input class=\"form-control input-lg\" type=\"email\" id=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "						<span class=\"ion-at form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"signupForm.email.$dirty\" ng-messages=\"signupForm.email.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "						  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.password.$invalid && signupForm.password.$dirty }\">\n" +
    "						<input class=\"form-control input-lg\" type=\"password\" minlength=\"5\" name=\"password\" ng-model=\"user.password\" placeholder=\"{{'Password'|translate}}\" required>\n" +
    "						<span class=\"ion-key form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"signupForm.password.$dirty\" ng-messages=\"signupForm.password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Password is required'|translate}}.</div>\n" +
    "						  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.confirmPassword.$invalid && signupForm.confirmPassword.$dirty }\">\n" +
    "						<input password-match=\"user.password\" class=\"form-control input-lg\" type=\"password\" minlength=\"5\" name=\"confirmPassword\" ng-model=\"user.confirm_password\" placeholder=\"{{'Confirm Password'|translate}}\" required>\n" +
    "						<span class=\"ion-key form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"signupForm.confirmPassword.$dirty\" ng-messages=\"signupForm.confirmPassword.$error\">\n" +
    "						  <div ng-message=\"compareTo\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "						  <div ng-message=\"required\">{{'Confirm password is required'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <p class=\"text-center text-muted\"><small>{{'By clicking on Sign up, you agree to'|translate}} <a href=\"#!/page/terms\" target=\"_blank\" ng-bind-html=\"'Terms & Conditions'|translate|to_trusted\"></a> {{'and '|translate}}&nbsp;<a href=\"#!/page/privacy-policy\" target=\"_blank\">{{'Privacy Policy'|translate}}</a></small></p>\n" +
    "					  <button  ng-click=\"onSubmitted(user);signupForm.$setPristine();\" ng-disabled=\"signupForm.$invalid || disableButton\" class=\"btn btn-lg btn-block btn-primary\">{{'Sign up'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					  <br/>\n" +
    "					  <p class=\"text-center text-muted\">{{'Already have an account?'|translate}} <a ng-if=\"currentPageType === 'page'\" ng-href=\"#!/users/login\" >{{'Log in now'|translate}}</a>\n" +
    "					  <a ng-if=\"currentPageType === 'modal'\" ng-click=\"goToState('Login')\" ng-href=\"#!/users/login\" >{{'Log in now'|translate}}</a></p>\n" +
    "					 </div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/users/subscribe_plans.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/subscribe_plans.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"well-lg\"></div>\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<subscriptions-plans ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"></subscriptions-plans>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/graspr/views/users/user_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/graspr/views/users/user_profile.tpl.html",
    "<section>\n" +
    "  <div class=\"container\">\n" +
    "  \n" +
    "    <div class=\"well-sm\"></div>\n" +
    "	<div class=\"row\">\n" +
    "	  <div class=\"thumbnail list-group-item-text\">\n" +
    "		<div class=\"well-lg clearfix\">\n" +
    "		  <div class=\"well-sm\"></div>\n" +
    "		  <div class=\"clearfix\">\n" +
    "			<h2 class=\"h1 pull-left list-group-item-heading list-group-item-text\">{{'My Profile'|translate}}</h2>\n" +
    "			<div class=\"pull-right\"><a href=\"#!/user/{{model.user_profile.id}}/{{model.user_profile.displayname|slugify}}/\" title=\"View Profile\" class=\"btn btn-default\">{{'View Profile'|translate}}</a></div>\n" +
    "		  </div>\n" +
    "		  <hr/>\n" +
    "		  <div class=\"clearfix\">\n" +
    "			<form class=\"form-horizontal clearfix\" name=\"editprofile\" ng-submit=\"editProfile()\">\n" +
    "			  <div class=\"form-group\">\n" +
    "				<label for=\"photo\" class=\"col-sm-3 control-label\">{{'Photo'|translate}}</label>\n" +
    "				<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "				  <div class=\"clearfix\">\n" +
    "					<div class=\"media-body col-sm-8 col-xs-12 row\">\n" +
    "					  <input type=\"file\" id=\"inputTaskAttachments\" name=\"attachment\"  onchange=\"angular.element(this).scope().uploadFile(this.files)\" />\n" +
    "					  <span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "\n" +
    "			  <div  class=\"form-group has-feedback\"  ng-class=\"{ 'has-error' : editprofile.displayname.$invalid && editprofile.displayname.$dirty }\">\n" +
    "				<label for=\"about\" class=\"col-sm-3 control-label\">{{'Display Name'|translate}}</label>\n" +
    "				<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "				  <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "				  <input type=\"text\" class=\"form-control\" name=\"displayname\" id=\"displayname\" ng-model=\"model.user_profile.displayname\" required>\n" +
    "				  <div class=\"help-block text-danger\" ng-if=\"editprofile.displayname.$dirty\" ng-messages=\"editprofile.displayname.$error\">\n" +
    "						<div ng-message=\"required\">{{'You must enter your Display Name'|translate}}.</div>\n" +
    "				  </div>\n" +
    "				  </div>				\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "\n" +
    "			  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.designation.$invalid && editprofile.designation.$dirty }\">\n" +
    "				<label for=\"about\" class=\"col-sm-3 control-label\">{{'Designation'|translate}}</label>\n" +
    "				<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "				  <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "				  <input type=\"text\" class=\"form-control\" name=\"designation\" id=\"designation\" ng-model=\"model.user_profile.designation\" maxlength=\"60\" required>\n" +
    "				  <div class=\"help-block text-danger\" ng-if=\"editprofile.designation.$dirty\" ng-messages=\"editprofile.designation.$error\">\n" +
    "						<div ng-message=\"required\">{{'You must enter your Designation'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>				\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.headline.$invalid && editprofile.headline.$dirty }\">\n" +
    "				<label for=\"about\" class=\"col-sm-3 control-label\">{{'Headline'|translate}}</label>\n" +
    "				<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "				  <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "				  <input type=\"text\" class=\"form-control\" name=\"headline\" id=\"headline\" ng-model=\"model.user_profile.headline\" required>\n" +
    "				  <div class=\"help-block text-danger\" ng-if=\"editprofile.headline.$dirty\" ng-messages=\"editprofile.headline.$error\">\n" +
    "						<div ng-message=\"required\">{{'You must enter your Headline'|translate}}.</div>\n" +
    "				  </div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.biography.$invalid && editprofile.biography.$dirty }\">\n" +
    "				<label for=\"about\" class=\"col-sm-3 control-label\">{{'About Me'|translate}}</label>\n" +
    "\n" +
    "				<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "				  <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "				  <textarea class=\"form-control\" id=\"biography\" name=\"biography\" rows=\"2\" ng-model=\"model.user_profile.biography\" required></textarea>\n" +
    "				   <div class=\"help-block text-danger\" ng-if=\"editprofile.biography.$dirty\" ng-messages=\"editprofile.biography.$error\">\n" +
    "						<div ng-message=\"required\">{{'You must enter your Biography'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <p class=\"help-block h6 show clearfix col-xs-11 navbar-btn row\">{{'Tell us about yourself, such as what you do, what your interests are, and what you hope to get out of your classes.'|translate}}</p> \n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			    <div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.website.$invalid && editprofile.website.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label\" for=\"website\">{{'Website'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"website\" id=\"website\" placeholder=\"{{'Website'|translate}}\" ng-model=\"model.user_profile.website\"/>\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your website URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.website.$dirty\" ng-messages=\"editprofile.website.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "					  </div>\n" +
    "				</div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.facebook_profile_link.$invalid && editprofile.facebook_profile_link.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label\" for=\"facebook_profile_link\">{{'Facebook profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"facebook_profile_link\" id=\"facebook_profile_link\" placeholder=\"{{'Facebook profile link'|translate}}\" ng-model=\"model.user_profile.facebook_profile_link\" />\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your facebook URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.facebook_profile_link.$dirty\" ng-messages=\"editprofile.facebook_profile_link.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.twitter_profile_link.$invalid && editprofile.twitter_profile_link.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label\" for=\"twitter_profile_link\">{{'Twitter profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"twitter_profile_link\" id=\"twitter_profile_link\" placeholder=\"{{'Twitter profile link'|translate}}\" ng-model=\"model.user_profile.twitter_profile_link\" />\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your twitter URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.twitter_profile_link.$dirty\" ng-messages=\"editprofile.twitter_profile_link.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.google_plus_profile_link.$invalid && editprofile.google_plus_profile_link.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label\" for=\"google_plus_profile_link\">{{'Google Plus profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"google_plus_profile_link\"  id=\"google_plus_profile_link\" placeholder=\"{{'Google Plus profile link'|translate}}\" ng-model=\"model.user_profile.google_plus_profile_link\" />\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your google plus URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.google_plus_profile_link.$dirty\" ng-messages=\"editprofile.google_plus_profile_link.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.linkedin_profile_link.$invalid && editprofile.linkedin_profile_link.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label\" for=\"linkedin_profile_link\">{{'LinkedIn profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"linkedin_profile_link\" id=\"linkedin_profile_link\" placeholder=\"{{'LinkedIn profile link'|translate}}\" ng-model=\"model.user_profile.linkedin_profile_link\" />\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your LinkeIn URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.linkedin_profile_link.$dirty\" ng-messages=\"editprofile.linkedin_profile_link.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-class=\"{ 'has-error' : editprofile.youtube_profile_link.$invalid && editprofile.youtube_profile_link.$dirty }\">\n" +
    "						<label class=\"col-sm-3 control-label \" for=\"youtube_profile_link\">{{'Youtube profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-9 col-sm-9 col-xs-12\">\n" +
    "							 <div class=\"col-sm-11 col-xs-12 row\">\n" +
    "								<input type=\"url\" class=\"form-control\" name=\"youtube_profile_link\" id=\"youtube_profile_link\" placeholder=\"{{'Youtube profile link'|translate}}\" ng-model=\"model.user_profile.youtube_profile_link\"/>\n" +
    "								<span class=\"text-danger help-block\">{{'Enter your youtube URL start with http:// or https://'|translate}}</span>\n" +
    "								<div class=\"help-block text-danger\" ng-if=\"editprofile.youtube_profile_link.$dirty\" ng-messages=\"editprofile.youtube_profile_link.$error\">\n" +
    "									<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			  <div class=\"well well-sm clearfix\">\n" +
    "				<div class=\"pull-right\">\n" +
    "					<label class=\"sr-only\" for=\"user_profile_save\">{{'Save'|translate}}</label>\n" +
    "					<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"user_profile_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "					<button type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"user_profile_save\" ng-disabled=\"true\" ng-hide=\"!disableSave\" >{{'Validating'|translate}} <span><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			</form>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<div class=\"well-sm\"></div>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "	<user-profile-seo></user-profile-seo>\n" +
    "</div>\n" +
    "");
}]);
