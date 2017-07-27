

$(document).ready(function(){
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('.tiles').masonry({
        itemSelector: '.tile',
        gutter: 0,
        fitWidth: true
    });
    setTimeout(function(){
        $('.tiles').css('opacity','1');
    },300);
    $('.modal').modal();
    $('.openme').click(function(){
        var id = $(this).prop("id");
        var bio = portfolios[id]['bio'];
        var proj1title = portfolios[id]['projects'][0]['title'];
        var proj2title = portfolios[id]['projects'][1]['title'];
        var proj3title = portfolios[id]['projects'][2]['title'];
        var proj1desc = portfolios[id]['projects'][0]['desc'];
        var proj2desc = portfolios[id]['projects'][1]['desc'];
        var proj3desc = portfolios[id]['projects'][2]['desc'];
        var email = ' ' + portfolios[id]['contact'];
        var name = ' ' + portfolios[id]['name'];
        $('.bio').text(bio);
        $('.name').text(name);
        $('.email').text(email);
        $('#proj1title').text(proj1title);
        $('#proj2title').text(proj2title);
        $('#proj3title').text(proj3title);
        $('#proj1desc').text(proj1desc);
        $('#proj2desc').text(proj2desc);
        $('#proj3desc').text(proj3desc);
        $('#modal1').modal('open');
    });
});


var portfolios = {
    'sahil' : {
        'name' : 'Sahil Morchi',
        'bio' : 'Sahil has first started coding when he was very young. He has completed the AP Computer Science A course and exam. In addition, he won first place in Coding and Programming at the State FBLA conference. He has coded various projects of his own such as tower defense games, artificial intelligence based games, and even a speech generator. Having been coding for such a long time, he wants to help others learn to code.',
        'projects' : [
            {
                'title' : 'Family Entertainment Center Database System',
                'desc' : 'A database system to manage the general operations of a family entertainment center. A program that earned him first place at the State FBLA Conference.'
            },
            {
                'title' : 'Asteria',
                'desc' : 'A 2D side-scrolling space shooter game with sci-fi and MMO elements.'
            },
            {
                'title' : 'Flux Planner',
                'desc' : 'An ACT/SAT study tool that help you keep track of your test scores, and tailors a custom study plan for you.'
            }
        ],
        'contact' : 'sahil.morchi@gmail.com'
    },
    'sidd' : {
        'name' : 'Sidd Iyer',
        'bio' : 'Sidd Iyer has been creating websites since middle school. Over the years, he devloped a variety of different web applications, including grades.mvla.me, a website similar to naviance that helps students predict their grades in the future and choose colleges that are tailored toward their academic progress. Along with grades.mvla.me, Sidd Iyer is currently working on two other sibling projects; agenda.mvla.me and study.mvla.me; both applictiaons that aim to lower student stress. This website was developed and designed from scratch by Sidd Iyer.',
        'projects' : [
            {
                'title' : 'Grades Calculator',
                'desc' : 'Calculator that allows students to make real time changes to their grade.'
            },
            {
                'title' : 'Study Guide Creator',
                'desc' : 'Allows you to take a photo of your work and can convert it to a compiled study guide.'
            },
            {
                'title' : 'School Agenda',
                'desc' : 'An agenda tailored towards his school district to manage classes and schoolwork.'
            }
        ],
        'contact' : 'sidbiyer@gmail.com'
    },
    
}