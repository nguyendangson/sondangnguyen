$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/risk_prediction.png',
            link: 'https://github.com/wwylab/LFSPRO',
            title: 'Personalized Cancer Risk Prediction',
            github: 'https://github.com/wwylab/LFSPRO',
            technologies: ['R', 'C++', 'Linux'],
            description: "I developed a Bayesian semi-parametric model for cancer risk prediction. Our approach is the first to model multiple primary cancers and competing risks from multiple cancer types, while accounting for the pedigree structure of the families.",
            categories: ['featured', 'statistics']
        },
        {
            image: 'assets/images/validation.png',
            link: 'https://github.com/peng-gang/LFSPROShiny',
            title: 'Model Validation on Clinically Ascertained Families',
            github: 'https://github.com/peng-gang/LFSPROShiny',
            technologies: ['R', 'Shiny', 'git'],
            description: "The project aims to validate existing cancer risk prediction models developed by our lab, which were trained using a research-based cohort, on a clinical dataset from MD Anderson Cancer Center. We are developing a Shiny app for clinicians to use our models on real patients.",
            categories: ['featured', 'statistics']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.github ? `<a href="${project.github}" style="color:blue;">Github</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}