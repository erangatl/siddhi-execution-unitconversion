!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");e.de=function(){this.pipeline.reset(),this.pipeline.add(e.de.trimmer,e.de.stopWordFilter,e.de.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.de.stemmer))},e.de.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.de.trimmer=e.trimmerSupport.generateTrimmer(e.de.wordCharacters),e.Pipeline.registerFunction(e.de.trimmer,"trimmer-de"),e.de.stemmer=function(){var r=e.stemmerSupport.Among,n=e.stemmerSupport.SnowballProgram,i=new function(){function e(e,r,n){return!(!v.eq_s(1,e)||(v.ket=v.cursor,!v.in_grouping(p,97,252)))&&(v.slice_from(r),v.cursor=n,!0)}function i(){for(var r,n,i,s,t=v.cursor;;)if(r=v.cursor,v.bra=r,v.eq_s(1,"ß"))v.ket=v.cursor,v.slice_from("ss");else{if(r>=v.limit)break;v.cursor=r+1}for(v.cursor=t;;)for(n=v.cursor;;){if(i=v.cursor,v.in_grouping(p,97,252)){if(s=v.cursor,v.bra=s,e("u","U",i))break;if(v.cursor=s,e("y","Y",i))break}if(i>=v.limit)return void(v.cursor=n);v.cursor=i+1}}function s(){for(;!v.in_grouping(p,97,252);){if(v.cursor>=v.limit)return!0;v.cursor++}for(;!v.out_grouping(p,97,252);){if(v.cursor>=v.limit)return!0;v.cursor++}return!1}function t(){m=v.limit,l=m;var e=v.cursor+3;0<=e&&e<=v.limit&&(d=e,s()||((m=v.cursor)<d&&(m=d),s()||(l=v.cursor)))}function o(){for(var e,r;;){if(r=v.cursor,v.bra=r,!(e=v.find_among(h,6)))return;switch(v.ket=v.cursor,e){case 1:v.slice_from("y");break;case 2:case 5:v.slice_from("u");break;case 3:v.slice_from("a");break;case 4:v.slice_from("o");break;case 6:if(v.cursor>=v.limit)return;v.cursor++}}}function c(){return m<=v.cursor}function u(){return l<=v.cursor}function a(){var e,r,n,i,s=v.limit-v.cursor;if(v.ket=v.cursor,(e=v.find_among_b(w,7))&&(v.bra=v.cursor,c()))switch(e){case 1:v.slice_del();break;case 2:v.slice_del(),v.ket=v.cursor,v.eq_s_b(1,"s")&&(v.bra=v.cursor,v.eq_s_b(3,"nis")&&v.slice_del());break;case 3:v.in_grouping_b(g,98,116)&&v.slice_del()}if(v.cursor=v.limit-s,v.ket=v.cursor,(e=v.find_among_b(f,4))&&(v.bra=v.cursor,c()))switch(e){case 1:v.slice_del();break;case 2:if(v.in_grouping_b(k,98,116)){var t=v.cursor-3;v.limit_backward<=t&&t<=v.limit&&(v.cursor=t,v.slice_del())}}if(v.cursor=v.limit-s,v.ket=v.cursor,(e=v.find_among_b(_,8))&&(v.bra=v.cursor,u()))switch(e){case 1:v.slice_del(),v.ket=v.cursor,v.eq_s_b(2,"ig")&&(v.bra=v.cursor,r=v.limit-v.cursor,v.eq_s_b(1,"e")||(v.cursor=v.limit-r,u()&&v.slice_del()));break;case 2:n=v.limit-v.cursor,v.eq_s_b(1,"e")||(v.cursor=v.limit-n,v.slice_del());break;case 3:if(v.slice_del(),v.ket=v.cursor,i=v.limit-v.cursor,!v.eq_s_b(2,"er")&&(v.cursor=v.limit-i,!v.eq_s_b(2,"en")))break;v.bra=v.cursor,c()&&v.slice_del();break;case 4:v.slice_del(),v.ket=v.cursor,(e=v.find_among_b(b,2))&&(v.bra=v.cursor,u()&&1==e&&v.slice_del())}}var d,l,m,h=[new r("",-1,6),new r("U",0,2),new r("Y",0,1),new r("ä",0,3),new r("ö",0,4),new r("ü",0,5)],w=[new r("e",-1,2),new r("em",-1,1),new r("en",-1,2),new r("ern",-1,1),new r("er",-1,1),new r("s",-1,3),new r("es",5,2)],f=[new r("en",-1,1),new r("er",-1,1),new r("st",-1,2),new r("est",2,1)],b=[new r("ig",-1,1),new r("lich",-1,1)],_=[new r("end",-1,1),new r("ig",-1,2),new r("ung",-1,1),new r("lich",-1,3),new r("isch",-1,2),new r("ik",-1,2),new r("heit",-1,3),new r("keit",-1,4)],p=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32,8],g=[117,30,5],k=[117,30,4],v=new n;this.setCurrent=function(e){v.setCurrent(e)},this.getCurrent=function(){return v.getCurrent()},this.stem=function(){var e=v.cursor;return i(),v.cursor=e,t(),v.limit_backward=e,v.cursor=v.limit,a(),v.cursor=v.limit_backward,o(),!0}};return function(e){return"function"==typeof e.update?e.update(function(e){return i.setCurrent(e),i.stem(),i.getCurrent()}):(i.setCurrent(e),i.stem(),i.getCurrent())}}(),e.Pipeline.registerFunction(e.de.stemmer,"stemmer-de"),e.de.stopWordFilter=e.generateStopWordFilter("aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann das dasselbe dazu daß dein deine deinem deinen deiner deines dem demselben den denn denselben der derer derselbe derselben des desselben dessen dich die dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er es etwas euch euer eure eurem euren eurer eures für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines können könnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mich mir mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie sind so solche solchem solchen solcher solches soll sollte sondern sonst um und uns unse unsem unsen unser unses unter viel vom von vor war waren warst was weg weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte während würde würden zu zum zur zwar zwischen über".split(" ")),e.Pipeline.registerFunction(e.de.stopWordFilter,"stopWordFilter-de")}});