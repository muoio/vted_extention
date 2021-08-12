if (document.getElementsByClassName('explain-question').length >20)
    expand();
//removeElementsBySelector('div:nth-child(2) > div.answer.block > div:nth-child(6)');
function expand(){
    //removeElementsBySelector("body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2)");
    //removeElementsById('menutop');
    //removeElementsByClass('col-md-4 col-sm-12 col-xs-12');
    unhideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer.lock');
    hideElementBySelector('#menutop-sticky-wrapper');
    hideElementBySelector('body > div.wrapper > div.breadcrumbs');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(2)');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div.col-md-4.col-sm-12.col-xs-12');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.text-right.margin-bottom-15');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div > i');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div > a');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div > strong:nth-child(3)');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div:nth-child(6)');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer >  div:nth-child(2)');//Cau hoi
    hideElementBySelector('#form-comment');
    hideElementBySelector('div.margin-top-15.text-right');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.header-card-line');
    hideElementBySelector('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div.explain-question > div.text-right.margin-bottom-20');
    hide_false_answer();
    unhide_explain();
    fit_content();
    hideElementBySelector('body > div.wrapper > div.footer-default');//hide footer
}
function fit_content(){
    let element = document.getElementsByClassName("col-md-8 col-sm-12 col-xs-12");
    if (element != null){
        console.log('all ',element.length);
        element[0].style.width = 'fit-content';
    }
}
function hide_footer(){
    hideElementBySelector('#footer-default');
}
function unhideElementBySelector(select_cmd){
    let myElements = $(select_cmd);
    for (let i = 0; i < myElements.length; i++) {
        let cnt_className = myElements[i].className;
        myElements[i].className = cnt_className.replace(' lock ',' block ');
    }
}
function hide_false_answer(){
    const answers = $('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer >  div:nth-child(3) > div');
    if (answers !== null){
        for (let i = 0; i < answers.length; i++) 
            if (answers[i].innerHTML.search('fa fa-check fa-lg icon-color-blue') == -1)
            {
                answers[i].style.display = "none";
            }
    }
    const correct_answers = $('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer >  div:nth-child(3) >  div > span > fa-check fa-lg icon-color-blue');

}
function unhide_explain(){
    let myElements = $('body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > div.answer > div.explain-question > div:nth-child(2)');
    console.log(myElements.length);
    for (let i = 0; i < myElements.length; i++) {
        let cnt_className = myElements[i].className;
        myElements[i].className = cnt_className.replace('hidden','');
    }
}
function hideElementBySelector(select_cmd){
    const elements = $(select_cmd);
    if (elements !== null){
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
}
/*
//const html2pdf_src ='https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js';
let html_template = `
<div class ="download_explain">
  <button type="button">Tải lời giải</button>
</div>
`;
function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

window.onload = function(){
    console.log('helloooo');
    
    
    var wraper = document.querySelector("body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(1) > div > h3");
    if (wraper !== null){
        wraper.innerHTML += html_template;
        console.log("FOUND");
    }
    const button_object = document.querySelector('.download_explain button');
    if (button_object !== null){
        console.log("button found");
        button_object.onclick = function(){
            var dapan = document.querySelector("body > div.wrapper > div.bg-color-dark > div > div:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2)");
            if (dapan !== null){
                let myElements = document.querySelectorAll(".answer.lock");

                for (let i = 0; i < myElements.length; i++) {
                    myElements[i].display = 'block';
                }
                //console.log(dapan);
                //saveAs(converted, 'test.docx');
                //download(dapan.innerHTML,'/media/tuan/TUAN/programing/python/html2docx/test','html');
            }
        }
    }
}*/