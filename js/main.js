AOS.init({
    duration:1000,
    once:true,
})
$(window).on("scroll", function(){
    let scrollPos = $(document).scrollTop();
    $("section").each(function(){
        let mid = $(document).scrollTop + $(window).height()/2;
        let top= $(this).offset().top;
        let bottom = top + $(this).outerHeight();
        if (mid> top && mid< bottom ){
            let id = $(this).attr("id");
            $(".menu li").removeClass("active");
            $(".menu li a[href='#"+id+"']").parent().addClass("active");
            }
    })
})
$('ul#menu>li:nth-of-type(1)').click(function(){
    $('html,body').animate({
        scrollTop:$('div.paralax').offset().top
    },500,"linear")
})
$("ul#menu>li:nth-of-type(2)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("div.about").offset().top,
    },
    500,
    "linear"
  );
});
$("ul#menu>li:nth-of-type(3)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("div.experience").offset().top,
    },
    500,
    "linear"
  );
});
$("ul#menu>li:nth-of-type(4)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("div.skills").offset().top,
    },
    500,
    "linear"
  );
});
$("ul#menu>li:nth-of-type(5)").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("div.contact").offset().top,
    },
    500,
    "linear"
  );
});
$(".bi-telephone-fill").hover(function(){
    $(this).addClass("animate__animated animate__headShake");
}, function(){
    $(this).removeClass("animate__animated animate__headShake");
});
$(".bi-telephone-fill").click(function(){
    $("html,body").animate({
        scrollTop:$('div.contact').offset().top,
    },500,"linear")
})
$(".experienceBtn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("div.experience").offset().top
    },
    500,
    "linear"
  );
});
// fetch data for experience section
let fetchProject = async()=>{
    try{
        let project;
        let res = await axios("./data/projects.json");
        project = res.data.map((elem)=>{
            return `
            <div class="project position-relative" data-aos="zoom-in" data-aos-delay=${elem.delay}>
                            <img src=${elem.image} alt="${elem.title}" width="100" loading="lazy" decoding="async"/>
                            <div >
                                <p  >${elem.title}</p>
                                <a href=${elem.link}><i class="bi bi-eye"></i></a>
                            </div>
                        </div>
            `;
        });
        document.querySelector("#projects").innerHTML = project.join("");
    }catch(error){
        console.log(error);
    }
}
fetchProject();

// fetch data for skills section
let fetchSkills=async()=>{
    try{
        let skill;
        let res= await axios("./data/skills.json");
        skill=res.data.map((elem)=>{
            return `
            <div class="skill d-flex p-2 flex-row border border-1 border-secondary flex-nowrap align-content-center rounded overflow-hidden mx-1 mt-2" data-aos=${elem.dataaos}>
                                <img src=${elem.image} class="rounded-circle" alt="${elem.title}" width="50" height="50" loading="lazy" decoding="async"/>
                                <h6 class="pt-3 mx-2" >${elem.title}</h6>
                             </div>
            `;

        });
        document.querySelector("#skill").innerHTML=skill.join(" ");
    }
    catch(error){
        console.log(error);
    }
}
fetchSkills();