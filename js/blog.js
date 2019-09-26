/**
 * Created by andrewapperley on 15-02-07.
 */

var loadAmount = 5;
var blogEntries = null;
var blogEntriesModals = null;
var renderer = new marked.Renderer();

function initBlog() {

    renderer.image =  function(href, title, text) {
        var out = '<img class="img-responsive blog-img" src="' + href + '" alt="' + text + '"';
        out += this.options.xhtml ? '/>' : '>';
        if (title) {
            out += '<p class="item-intro text-muted blog-caption">' + title + '</p>';
        }

        return out;
    };

    loadMoreEntries();
}

// Load More Function

function loadMoreEntries() {
    if (blogEntries == null || blogEntriesModals == null) {
        blogEntries = $("#blog-entries");
        blogEntriesModals = $("#blog-modals");
    }
    $.getJSON("./Blog/entries.json", function(data) {
      data = data.reverse();
        for (var i = 0; i < loadAmount-1; i++) {
            blogEntries.append(createBlogEntry(data[i]));
            let path = data[i]["path"];
            $.get("Blog/"+path+"/entry.md", function(markdown) {
                blogEntriesModals.append(createBlogEntryModal(markdown, path));
            });
        }
    });
}

// Create Blog Entry Modal

function createBlogEntryModal(markdown, path) {
    var blogModal = '<div class="portfolio-modal modal fade" id="'+path+'" tabindex="-1" role="dialog" aria-hidden="true">'+
        '<div class="modal-content">'+
            '<div class="close-modal" data-dismiss="modal">'+
            '<div class="lr">'+
                '<div class="rl">'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="container">'+
            '<div class="row">'+
                '<div class="col-lg-8 col-lg-offset-2">'+
                    '<div class="modal-body blog-entry-modal text-left pull-left">'+
                        marked(markdown, { renderer: renderer }) +
                        '<button type="button" class="btn btn-primary blog-close-btn" data-dismiss="modal"><i class="fa fa-times"></i> Close Modal</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    return blogModal;
}

// Create Blog Entry

function createBlogEntry(metadata) {
    return '<div class="col-sm-4">'+
                '<h4>'+metadata["name"]+'</h4>'+
                '<p class="text-muted"><span class="text-danger">'+metadata["date"]+'</span></p>'+
                '<p>'+metadata["snippet"]+' [...]</p>'+
                '<a href="#'+metadata["path"]+'" data-toggle="modal"><button type="button" class="btn btn-primary">Read More</button></a>'+
            '</div>';
}
