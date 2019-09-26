var portfolioList = null;
var portfolioModals = null;

function initPortfolio() {
    portfolioList = $("#portfolio-list");
    portfolioModals = $("#portfolio-modals");
    $.getJSON("./Portfolio/portfolio.json", function(data) {
        for (var i = 0; i < data.length; i++) {
            portfolioList.append(createPortfolioItem(data[i], i));
            portfolioModals.append(createPortfolioModal(data[i], i));
        }
    });
}

function createPortfolioItem(data, i) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a href="#portfolioModal${i}" class="portfolio-link" data-toggle="modal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src="img/portfolio/work/${data.item.thumb}" class="img-responsive" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${data.item.title}</h4>
                <p class="text-muted">${data.item.caption}</p>
            </div>
        </div>
    `;
}

function createPortfolioModal(data, i) {
    return `
        <div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>${data.modal.title}</h2>
                                <p class="item-intro text-muted">${data.modal.intro}</p>
                                <img class="img-responsive" src="img/portfolio/work/${data.modal.photo}" alt="">
                                ${data.modal.body}
                                <ul class="list-inline">
                                    <li>Date: ${data.modal.date}</li>
                                    <li>Categories: ${data.modal.categories}</li>
                                </ul>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}