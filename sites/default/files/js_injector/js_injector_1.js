jQuery(".forum-post-links a, .forum-jump-links a, .topic-reply-link a, .last-post-link a, .topic-new-post-link a, .forum-add-forum a, .forum-add-poll a").removeClass();
jQuery(".forum-post-links a, .forum-jump-links a, .topic-reply-link a, .last-post-link a, .topic-new-post-link a, .forum-add-forum a, .forum-add-poll a").addClass("btn btn-default btn-sm");

jQuery(".forum-jump-links a").html('<span class="glyphicon glyphicon-chevron-up"></span> Top');

jQuery(".quote a").html('<span class="glyphicon glyphicon-comment"></span> Quote');

jQuery(".comment-delete a, .post-delete a").html('<span class="glyphicon glyphicon-trash"></span> Delete');
jQuery(".comment-delete a, .post-delete a").addClass("btn-danger");

jQuery(".comment-edit a, .post-edit a").html('<span class="glyphicon glyphicon-edit"></span> Edit');

jQuery(".comment-reply a, .comment-add a").html('<span class="glyphicon glyphicon-arrow-left"></span> Reply');

jQuery(".comment-approve a").html('<span class="glyphicon glyphicon-ok"></span> Approve');

var label = jQuery(".flag-email_node a").html();
jQuery(".flag-email_node a").html('<span class="glyphicon glyphicon-envelope"></span> ' + label);

var label = jQuery(".flag-subscribe_node a").html();
if(label == "Unsubscribe") {
	jQuery(".flag-subscribe_node a").html('<span class="glyphicon glyphicon-ban-circle"></span> ' + label);
	jQuery(".flag-subscribe_node a").addClass("btn-warning");
}
else {
	jQuery(".flag-subscribe_node a").html('<span class="glyphicon glyphicon-star"></span> ' + label);
}

jQuery(".comment-approve a").addClass("btn-success");

var label = jQuery(".topic-reply-link a span").html();
jQuery(".topic-reply-link a").html('<span class="glyphicon glyphicon-plus"></span> ' + label);

var label = jQuery(".last-post-link a span").html();
jQuery(".last-post-link a").html('<span class="glyphicon glyphicon-arrow-down"></span> ' + 'Most recent post');

var label = jQuery(".topic-new-post-link a span").html();
jQuery(".topic-new-post-link a").html('<span class="glyphicon glyphicon-arrow-down"></span> ' + label);

var label = jQuery(".forum-add-forum a span").html();
jQuery(".forum-add-forum a").html('<span class="glyphicon glyphicon-plus"></span> ' + label);

var label = jQuery(".forum-add-poll a span").html();
jQuery(".forum-add-poll a").html('<span class="glyphicon glyphicon-stats"></span> ' + label);