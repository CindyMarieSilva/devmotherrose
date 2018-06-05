//FAQ 1
$("#faq1read3full").on('click', function() {
   $("#faq3full").fadeIn();
   $("#faq1").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull3").on('click', function() {
   $("#faq1").fadeIn();
   $("#faq3full").fadeOut();
   $(window).scrollTop(0);
});

$("#faq1read2full").on('click', function() {
   $("#faq2full").fadeIn();
   $("#faq1").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull2").on('click', function() {
   $("#faq1").fadeIn();
   $("#faq2full").fadeOut();
   $(window).scrollTop(0);
});

//FAQ 1 Answers
$("#navfull2").on('click', function() {
   $("#faq2full").fadeIn();
   $("#faq3full").hide();
   $(window).scrollTop(0);
});
$("#navfull3").on('click', function() {
   $("#faq3full").fadeIn();
   $("#faq2full").hide();
   $(window).scrollTop(0);
});

//FAQ 2
$("#faq2read4full").on('click', function() {
   $("#faq4full").fadeIn();
   $("#faq2").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull4").on('click', function() {
   $("#faq2").fadeIn();
   $("#faq4full").fadeOut();
   $(window).scrollTop(0);
});
$("#faq2read5full").on('click', function() {
   $("#faq5full").fadeIn();
   $("#faq2").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull5").on('click', function() {
   $("#faq2").fadeIn();
   $("#faq5full").fadeOut();
   $(window).scrollTop(0);
});
$("#faq2read6full").on('click', function() {
   $("#faq6full").fadeIn();
   $("#faq2").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull6").on('click', function() {
   $("#faq2").fadeIn();
   $("#faq6full").fadeOut();
   $(window).scrollTop(0);
});
$("#faq2read7full").on('click', function() {
   $("#faq7full").fadeIn();
   $("#faq2").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull7").on('click', function() {
   $("#faq2").fadeIn();
   $("#faq7full").fadeOut();
   $(window).scrollTop(0);
});

//FAQ 2 Answers
$("#navfull4").on('click', function() {
   $("#faq4full").fadeIn();
   $("#faq5full").hide();
   $("#faq6full").hide();
   $("#faq7full").hide();
   $(window).scrollTop(0);
});
$("#navfull4a").on('click', function() {
   $("#faq4full").fadeIn();
   $("#faq5full").hide();
   $("#faq6full").hide();
   $("#faq7full").hide();
   $(window).scrollTop(0);
});

$("#navfull5").on('click', function() {
   $("#faq5full").fadeIn();
   $("#faq6full").hide();
   $("#faq7full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});

$("#navfull5a").on('click', function() {
   $("#faq5full").fadeIn();
   $("#faq6full").hide();
   $("#faq7full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});

$("#navfull6").on('click', function() {
   $("#faq6full").fadeIn();
   $("#faq5full").hide();
   $("#faq7full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});

$("#navfull6a").on('click', function() {
   $("#faq6full").fadeIn();
   $("#faq5full").hide();
   $("#faq7full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});

$("#navfull7").on('click', function() {
   $("#faq7full").fadeIn();
   $("#faq6full").hide();
   $("#faq5full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});

$("#navfull7a").on('click', function() {
   $("#faq7full").fadeIn();
   $("#faq6full").hide();
   $("#faq5full").hide();
   $("#faq4full").hide();
   $(window).scrollTop(0);
});


//FAQ 3
$("#faq3read8full").on('click', function() {
   $("#faq8full").fadeIn();
   $("#faq3").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull8").on('click', function() {
   $("#faq3").fadeIn();
   $("#faq8full").fadeOut();
   $(window).scrollTop(0);
});

$("#faq3read9full").on('click', function() {
   $("#faq9full").fadeIn();
   $("#faq3").fadeOut();
   $(window).scrollTop(0);
});
$("#closefull9").on('click', function() {
   $("#faq3").fadeIn();
   $("#faq9full").fadeOut();
   $(window).scrollTop(0);
});

//FAQ 3 Answers
$("#navfull8").on('click', function() {
   $("#faq8full").fadeIn();
   $("#faq9full").hide();
   $(window).scrollTop(0);
});
$("#navfull9").on('click', function() {
   $("#faq9full").fadeIn();
   $("#faq8full").hide();
   $(window).scrollTop(0);
});

//FAQ 4
$("#faq4read10full").on('click', function() {
   $("#faq10full").fadeIn();
   $("#faq4").fadeOut();
});
$("#closefull10").on('click', function() {
   $("#faq4").fadeIn();
   $("#faq10full").fadeOut();
});

$("#faq4read11full").on('click', function() {
   $("#faq11full").fadeIn();
   $("#faq4").fadeOut();
});
$("#closefull11").on('click', function() {
   $("#faq4").fadeIn();
   $("#faq11full").fadeOut();
});

//FAQ 4 Answers
$("#navfull10").on('click', function() {
   $("#faq10full").fadeIn();
   $("#faq11full").hide();
});
$("#navfull11").on('click', function() {
   $("#faq11full").fadeIn();
   $("#faq10full").hide();
});



//FAQ 5
$("#faq5read16full").on('click', function() {
   $("#faq16full").fadeIn();
   $("#faq5").fadeOut();
});
$("#closefull16").on('click', function() {
   $("#faq5").fadeIn();
   $("#faq16full").fadeOut();
});

$("#faq5read17full").on('click', function() {
   $("#faq17full").fadeIn();
   $("#faq5").fadeOut();
});
$("#closefull17").on('click', function() {
   $("#faq5").fadeIn();
   $("#faq17full").fadeOut();
});

$("#faq5read18full").on('click', function() {
   $("#faq18full").fadeIn();
   $("#faq5").fadeOut();
});
$("#closefull18").on('click', function() {
   $("#faq5").fadeIn();
   $("#faq18full").fadeOut();
});

//FAQ 5 Answers
$("#navfull16, #navfull16a").on('click', function() {
   $("#faq16full").fadeIn();
   $("#faq17full").hide();
   $("#faq18full").hide();
});
$("#navfull17, #navfull17a").on('click', function() {
   $("#faq17full").fadeIn();
   $("#faq16full").hide();
   $("#faq18full").hide();
});
$("#navfull18, #navfull18a").on('click', function() {
   $("#faq18full").fadeIn();
   $("#faq16full").hide();
   $("#faq17full").hide();
});

//FAQ 6
$("#faq6read12full").on('click', function() {
   $("#faq12full").fadeIn();
   $("#faq6").fadeOut();
});
$("#closefull12").on('click', function() {
   $("#faq6").fadeIn();
   $("#faq12full").fadeOut();
});
$("#faq6read13full").on('click', function() {
   $("#faq13full").fadeIn();
   $("#faq6").fadeOut();
});
$("#closefull13").on('click', function() {
   $("#faq6").fadeIn();
   $("#faq13full").fadeOut();
});

$("#faq6read14full").on('click', function() {
   $("#faq6full").fadeIn();
   $("#faq6").fadeOut();
});
$("#closefull14").on('click', function() {
   $("#faq6").fadeIn();
   $("#faq14full").fadeOut();
});
$("#faq6read15full").on('click', function() {
   $("#faq15full").fadeIn();
   $("#faq6").fadeOut();
});
$("#closefull15").on('click', function() {
   $("#faq6").fadeIn();
   $("#faq15full").fadeOut();
});

//FAQ 6 Answers
$("#navfull12, #navfull12a").on('click', function() {
   $("#faq12full").fadeIn();
   $("#faq13full").hide();
   $("#faq14full").hide();
   $("#faq15full").hide();
});
$("#navfull13, #navfull13a").on('click', function() {
   $("#faq13full").fadeIn();
   $("#faq14full").hide();
   $("#faq15full").hide();
   $("#faq12full").hide();
});

$("#navfull14, #navfull14a").on('click', function() {
   $("#faq14full").fadeIn();
   $("#faq12full").hide();
   $("#faq13full").hide();
   $("#faq15full").hide();
});
$("#navfull15, #navfull15a").on('click', function() {
   $("#faq15full").fadeIn();
   $("#faq14full").hide();
   $("#faq13full").hide();
   $("#faq12full").hide();
});

//FAQ 7
$("#faq7read19full").on('click', function() {
   $("#faq19full").fadeIn();
   $("#faq7").fadeOut();
});
$("#closefull19").on('click', function() {
   $("#faq7").fadeIn();
   $("#faq19full").fadeOut();
});

$("#faq7read20full").on('click', function() {
   $("#faq20full").fadeIn();
   $("#faq7").fadeOut();
});
$("#closefull20").on('click', function() {
   $("#faq7").fadeIn();
   $("#faq20full").fadeOut();
});

$("#faq6read21full").on('click', function() {
   $("#faq21full").fadeIn();
   $("#faq7").fadeOut();
});
$("#closefull21").on('click', function() {
   $("#faq7").fadeIn();
   $("#faq21full").fadeOut();
});

$("#faq6read22full").on('click', function() {
   $("#faq22full").fadeIn();
   $("#faq7").fadeOut();
});
$("#closefull22").on('click', function() {
   $("#faq7").fadeIn();
   $("#faq22full").fadeOut();
});

//FAQ 7 Answers
$("#navfull19, #navfull19a").on('click', function() {
   $("#faq19full").fadeIn();
   $("#faq20full").hide();
   $("#faq21full").hide();
   $("#faq22full").hide();
});
$("#navfull20, #navfull20a").on('click', function() {
   $("#faq20full").fadeIn();
   $("#faq19full").hide();
   $("#faq21full").hide();
   $("#faq22full").hide();
});
$("#navfull21, #navfull21a").on('click', function() {
   $("#faq21full").fadeIn();
   $("#faq22full").hide();
   $("#faq20full").hide();
   $("#faq19full").hide();
});
$("#navful22, #navfull22a").on('click', function() {
   $("#faq22full").fadeIn();
   $("#faq21full").hide();
   $("#faq20full").hide();
   $("#faq19full").hide();
});

//FAQ 8
$("#faq8read23full").on('click', function() {
   $("#faq23full").fadeIn();
   $("#faq8").fadeOut();
});
$("#closefull23").on('click', function() {
   $("#faq8").fadeIn();
   $("#faq23full").fadeOut();
});

$("#faq8read24full").on('click', function() {
   $("#faq24full").fadeIn();
   $("#faq8").fadeOut();
});
$("#closefull24").on('click', function() {
   $("#faq8").fadeIn();
   $("#faq24full").fadeOut();
});

$("#faq8read25full").on('click', function() {
   $("#faq25full").fadeIn();
   $("#faq8").fadeOut();
});
$("#closefull25").on('click', function() {
   $("#faq8").fadeIn();
   $("#faq25full").fadeOut();
});

//FAQ 8 Answers
$("#navfull23, #navfull23a").on('click', function() {
   $("#faq23full").fadeIn();
   $("#faq24full").hide();
   $("#faq25full").hide();
});
$("#navfull24, #navfull24a").on('click', function() {
   $("#faq24full").fadeIn();
   $("#faq23full").hide();
   $("#faq25full").hide();
});
$("#navfull25, #navfull25a").on('click', function() {
   $("#faq25full").fadeIn();
   $("#faq24full").hide();
   $("#faq23full").hide();
});

//FAQ 9
$("#faq9read26full").on('click', function() {
   $("#faq26full").fadeIn();
   $("#faq9").fadeOut();
});
$("#closefull26").on('click', function() {
   $("#faq9").fadeIn();
   $("#faq26full").fadeOut();
});

$("#faq9read27full").on('click', function() {
   $("#faq27full").fadeIn();
   $("#faq9").fadeOut();
});
$("#closefull27").on('click', function() {
   $("#faq9").fadeIn();
   $("#faq27full").fadeOut();
});

$("#faq9read28full").on('click', function() {
   $("#faq28full").fadeIn();
   $("#faq9").fadeOut();
});
$("#closefull28").on('click', function() {
   $("#faq9").fadeIn();
   $("#faq28full").fadeOut();
});

$("#faq9read29full").on('click', function() {
   $("#faq29full").fadeIn();
   $("#faq9").fadeOut();
});
$("#closefull29").on('click', function() {
   $("#faq9").fadeIn();
   $("#faq29full").fadeOut();
});

//FAQ 9 Answers
$("#navfull26, #navfull26a").on('click', function() {
   $("#faq26full").fadeIn();
   $("#faq27full").hide();
   $("#faq28full").hide();
   $("#faq29full").hide();
});
$("#navfull27, #navfull27a").on('click', function() {
   $("#faq27full").fadeIn();
   $("#faq26full").hide();
   $("#faq28full").hide();
   $("#faq29full").hide();
});
$("#navfull28, #navfull28a").on('click', function() {
   $("#faq28full").fadeIn();
   $("#faq26full").hide();
   $("#faq27full").hide();
   $("#faq29full").hide();
});
$("#navfull29, #navfull29a").on('click', function() {
   $("#faq29full").fadeIn();
   $("#faq28full").hide();
   $("#faq27full").hide();
   $("#faq26full").hide();
});



//FAQ 10
$("#faq10read30full").on('click', function() {
   $("#faq30full").fadeIn();
   $("#faq10").fadeOut();
});
$("#closefull30").on('click', function() {
   $("#faq10").fadeIn();
   $("#faq23full").fadeOut();
});

$("#faq10read31full").on('click', function() {
   $("#faq31full").fadeIn();
   $("#faq10").fadeOut();
});
$("#closefull31").on('click', function() {
   $("#faq10").fadeIn();
   $("#faq31full").fadeOut();
});

$("#faq10read32full").on('click', function() {
   $("#faq32full").fadeIn();
   $("#faq10").fadeOut();
});
$("#closefull32").on('click', function() {
   $("#faq10").fadeIn();
   $("#faq32full").fadeOut();
});

//FAQ 10 Answers
$("#navfull30, #navfull30a").on('click', function() {
   $("#faq30full").fadeIn();
   $("#faq31full").hide();
   $("#faq32full").hide();
});
$("#navfull31, #navfull31a").on('click', function() {
   $("#faq31full").fadeIn();
   $("#faq30full").hide();
   $("#faq32full").hide();
});
$("#navfull32, #navfull32a").on('click', function() {
   $("#faq32full").fadeIn();
   $("#faq30full").hide();
   $("#faq31full").hide();
});



//FAQ 11
$("#faq11read33full").on('click', function() {
   $("#faq33full").fadeIn();
   $("#faq11").fadeOut();
});
$("#closefull33").on('click', function() {
   $("#faq11").fadeIn();
   $("#faq33full").fadeOut();
});

$("#faq11read34full").on('click', function() {
   $("#faq34full").fadeIn();
   $("#faq11").fadeOut();
});
$("#closefull34").on('click', function() {
   $("#faq11").fadeIn();
   $("#faq34full").fadeOut();
});

$("#faq11read35full").on('click', function() {
   $("#faq35full").fadeIn();
   $("#faq11").fadeOut();
});
$("#closefull35").on('click', function() {
   $("#faq11").fadeIn();
   $("#faq35full").fadeOut();
});

//FAQ 11 Answers
$("#navfull33, #navfull33a").on('click', function() {
   $("#faq33full").fadeIn();
   $("#faq34full").hide();
   $("#faq35full").hide();
});
$("#navfull34, #navfull34a").on('click', function() {
   $("#faq34full").fadeIn();
   $("#faq33full").hide();
   $("#faq35full").hide();
});
$("#navfull35, #navfull35a").on('click', function() {
   $("#faq35full").fadeIn();
   $("#faq34full").hide();
   $("#faq33full").hide();
});



//FAQ 12
$("#faq12read36full").on('click', function() {
   $("#faq36full").fadeIn();
   $("#faq12").fadeOut();
});
$("#closefull36").on('click', function() {
   $("#faq12").fadeIn();
   $("#faq36full").fadeOut();
});

$("#faq12read37full").on('click', function() {
   $("#faq37full").fadeIn();
   $("#faq12").fadeOut();
});
$("#closefull37").on('click', function() {
   $("#faq12").fadeIn();
   $("#faq37full").fadeOut();
});

$("#faq12read38full").on('click', function() {
   $("#faq38full").fadeIn();
   $("#faq12").fadeOut();
});
$("#closefull38").on('click', function() {
   $("#faq12").fadeIn();
   $("#faq38full").fadeOut();
});

//FAQ 12 Answers
$("#navfull36, #navfull36a").on('click', function() {
   $("#faq36full").fadeIn();
   $("#faq37full").hide();
   $("#faq38full").hide();
});
$("#navfull37, #navfull37a").on('click', function() {
   $("#faq37full").fadeIn();
   $("#faq36full").hide();
   $("#faq38full").hide();
});
$("#navfull38, #navfull38a").on('click', function() {
   $("#faq38full").fadeIn();
   $("#faq36full").hide();
   $("#faq37full").hide();
});

//FAQ 13
$("#faq13read39full").on('click', function() {
   $("#faq39full").fadeIn();
   $("#faq13").fadeOut();
});
$("#closefull39").on('click', function() {
   $("#faq13").fadeIn();
   $("#faq39full").fadeOut();
});

$("#faq13read40full").on('click', function() {
   $("#faq40full").fadeIn();
   $("#faq13").fadeOut();
});
$("#closefull40").on('click', function() {
   $("#faq13").fadeIn();
   $("#faq40full").fadeOut();
});

//FAQ 13 Answers
$("#navfull39").on('click', function() {
   $("#faq39full").fadeIn();
   $("#faq40full").hide();
});
$("#navfull40").on('click', function() {
   $("#faq40full").fadeIn();
   $("#faq39full").hide();
});




//FAQ 14
$("#faq14read50full").on('click', function() {
   $("#faq50full").fadeIn();
   $("#faq14").fadeOut();
});
$("#closefull50").on('click', function() {
   $("#faq14").fadeIn();
   $("#faq50full").fadeOut();
});

$("#faq14read51full").on('click', function() {
   $("#faq51full").fadeIn();
   $("#faq14").fadeOut();
});
$("#closefull51").on('click', function() {
   $("#faq14").fadeIn();
   $("#faq51full").fadeOut();
});

$("#faq14read52full").on('click', function() {
   $("#faq52full").fadeIn();
   $("#faq14").fadeOut();
});
$("#closefull52").on('click', function() {
   $("#faq14").fadeIn();
   $("#faq52full").fadeOut();
});

$("#faq14read53full").on('click', function() {
   $("#faq53full").fadeIn();
   $("#faq14").fadeOut();
});
$("#closefull53").on('click', function() {
   $("#faq14").fadeIn();
   $("#faq53full").fadeOut();
});

//FAQ 14 Answers
$("#navfull50, #navfull50a").on('click', function() {
   $("#faq50full").fadeIn();
   $("#faq51full").hide();
   $("#faq52full").hide();
   $("#faq53full").hide();
});
$("#navfull51, #navfull51a").on('click', function() {
   $("#faq51full").fadeIn();
   $("#faq50full").hide();
   $("#faq52full").hide();
   $("#faq53full").hide();
});
$("#navfull52, #navfull52a").on('click', function() {
   $("#faq52full").fadeIn();
   $("#faq51full").hide();
   $("#faq50full").hide();
   $("#faq53full").hide();
});
$("#navfull53, #navfull53a").on('click', function() {
   $("#faq53full").fadeIn();
   $("#faq51full").hide();
   $("#faq52full").hide();
   $("#faq50full").hide();
});

//FAQ 15
$("#faq15read54full").on('click', function() {
   $("#faq54full").fadeIn();
   $("#faq15").fadeOut();
});
$("#closefull54").on('click', function() {
   $("#faq15").fadeIn();
   $("#faq54full").fadeOut();
});

$("#faq15read55full").on('click', function() {
   $("#faa55full").fadeIn();
   $("#faq15").fadeOut();
});
$("#closefull55").on('click', function() {
   $("#faq15").fadeIn();
   $("#faq55full").fadeOut();
});

$("#faq15read56full").on('click', function() {
   $("#faq56full").fadeIn();
   $("#faq15").fadeOut();
});
$("#closefull56").on('click', function() {
   $("#faq15").fadeIn();
   $("#faq56full").fadeOut();
});

//FAQ 15 Answers
$("#navfull54, #navfull54a").on('click', function() {
   $("#faq54full").fadeIn();
   $("#faq55full").hide();
   $("#faq56full").hide();
});
$("#navfull55, #navfull55a").on('click', function() {
   $("#faq55full").fadeIn();
   $("#faq54full").hide();
   $("#faq56full").hide();
});
$("#navfull56, #navfull56a").on('click', function() {
   $("#faq56full").fadeIn();
   $("#faq55full").hide();
   $("#faq54full").hide();
});

//FAQ 16
$("#faq16read57full").on('click', function() {
   $("#faq57full").fadeIn();
   $("#faq16").fadeOut();
});
$("#closefull57").on('click', function() {
   $("#faq16").fadeIn();
   $("#faq57full").fadeOut();
});

$("#faq16read58full").on('click', function() {
   $("#faq58full").fadeIn();
   $("#faq16").fadeOut();
});
$("#closefull58").on('click', function() {
   $("#faq16").fadeIn();
   $("#faq58full").fadeOut();
});

$("#faq16read59full").on('click', function() {
   $("#faq59full").fadeIn();
   $("#faq16").fadeOut();
});
$("#closefull59").on('click', function() {
   $("#faq16").fadeIn();
   $("#faq59full").fadeOut();
});

//FAQ 16 Answers
$("#navfull57, #navfull57a").on('click', function() {
   $("#faq57full").fadeIn();
   $("#faq58full").hide();
   $("#faq59full").hide();
});
$("#navfull58, #navfull58a").on('click', function() {
   $("#faq58full").fadeIn();
   $("#faq57full").hide();
   $("#faq59full").hide();
});
$("#navfull59, #navfull59a").on('click', function() {
   $("#faq59full").fadeIn();
   $("#faq58full").hide();
   $("#faq57full").hide();
});


//FAQ 17
$("#faq17read60full").on('click', function() {
   $("#faq60full").fadeIn();
   $("#faq17").fadeOut();
});
$("#closefull60").on('click', function() {
   $("#faq17").fadeIn();
   $("#faq60full").fadeOut();
});

$("#faq17read61full").on('click', function() {
   $("#faq61full").fadeIn();
   $("#faq9").fadeOut();
});
$("#closefull61").on('click', function() {
   $("#faq17").fadeIn();
   $("#faq61full").fadeOut();
});

$("#faq17read62full").on('click', function() {
   $("#faq62full").fadeIn();
   $("#faq17").fadeOut();
});
$("#closefull62").on('click', function() {
   $("#faq17").fadeIn();
   $("#faq62full").fadeOut();
});

$("#faq17read63full").on('click', function() {
   $("#faq63full").fadeIn();
   $("#faq17").fadeOut();
});
$("#closefull63").on('click', function() {
   $("#faq17").fadeIn();
   $("#faq63full").fadeOut();
});

//FAQ 17 Answers
$("#navfull60, #navfull60a").on('click', function() {
   $("#faq60full").fadeIn();
   $("#faq61full").hide();
   $("#faq62full").hide();
   $("#faq63full").hide();
});
$("#navfull61, #navfull61a").on('click', function() {
   $("#faq61full").fadeIn();
   $("#faq60full").hide();
   $("#faq62full").hide();
   $("#faq63full").hide();
});
$("#navfull62, #navfull62a").on('click', function() {
   $("#faq62full").fadeIn();
   $("#faq61full").hide();
   $("#faq60full").hide();
   $("#faq63full").hide();
});
$("#navfull63, #navfull63a").on('click', function() {
   $("#faq63full").fadeIn();
   $("#faq61full").hide();
   $("#faq62full").hide();
   $("#faq60full").hide();
});

//FAQ 18
$("#faq18read64full").on('click', function() {
   $("#faq64full").fadeIn();
   $("#faq18").fadeOut();
});
$("#closefull64").on('click', function() {
   $("#faq18").fadeIn();
   $("#faq64full").fadeOut();
});

$("#faq18read65full").on('click', function() {
   $("#faq65full").fadeIn();
   $("#faq18").fadeOut();
});
$("#closefull65").on('click', function() {
   $("#faq18").fadeIn();
   $("#faq65full").fadeOut();
});

$("#faq18read66full").on('click', function() {
   $("#faq66full").fadeIn();
   $("#faq18").fadeOut();
});
$("#closefull66").on('click', function() {
   $("#faq18").fadeIn();
   $("#faq66full").fadeOut();
});

//FAQ 18 Answers
$("#navfull64, #navfull64a").on('click', function() {
   $("#faq64full").fadeIn();
   $("#faq65full").hide();
   $("#faq66full").hide();
});
$("#navfull65, #navfull65a").on('click', function() {
   $("#faq65full").fadeIn();
   $("#faq64full").hide();
   $("#faq66full").hide();
});
$("#navfull66, #navfull66a").on('click', function() {
   $("#faq66full").fadeIn();
   $("#faq65full").hide();
   $("#faq64full").hide();
});