$(
    $.fn.extRating = function(options) {
        
        var defaults = {
            activeStarPath: '/assets/extRating/activeStar.png',
            inactiveStarPath: '/assets/extRating/inactiveStar.png',
            numberOfStars: 5
        };
        options = $.extend(defaults, options);

        var current_rating = parseInt($(this).val());
        var $input = $(this);
        var $parent = $(this).parent();
        
        var container_id = $input.attr("id") + "_extStar"
        var $container = $('<span>', { 
            id: container_id
        }).appendTo($parent);

        $input.hide();

        for(var star_index = 1; star_index <= options.numberOfStars; star_index++) {

            var $star = $('<span>', { class: 'extStar' }).appendTo($container);

            var $active_star_img = $('<img>', {
                class: 'extActiveStarImage',
                src: options.activeStarPath,
                alt: star_index
            }).appendTo($star);

            var $inactive_star_img = $('<img>', {
                class: 'extInactiveStarImage',
                src: options.inactiveStarPath,
                alt: star_index
            }).appendTo($star);

            $.each([$active_star_img, $inactive_star_img], function() {

                this.click(function() {
                    var last_star_index = parseInt($(this).attr('alt'));
                    $input.val(last_star_index);
                });

                this.mousemove(function() {
                    var last_star_index = parseInt($(this).attr('alt'));
                    fillStars(container_id, last_star_index)
                });

                this.mouseleave(function() {
                    var last_star_index = parseInt($input.val());
                    fillStars(container_id, last_star_index)
                });

            });


        }

        fillStars(container_id, current_rating);

        function fillStars(container_id, current_star_index) {
            for(var i = 1; i <= options.numberOfStars; i++) {
                var $active = $("#" + container_id + " .extActiveStarImage[alt='" + i + "']");
                var $inactive = $("#" + container_id + " .extInactiveStarImage[alt='" + i + "']");
                if(current_star_index >= i) {
                    $active.show();
                    $inactive.hide();
                } else {
                    $active.hide();
                    $inactive.show();
                }
            }
        }

    }
);

