var list5Lima = ["andrea-cabrera.jpg","ariadna-izaguirre.jpg","carito-juarez.jpg","cristy-castro.jpg","karol-orrillo.jpg","paola-ortiz.jpg","teresa-lara.jpg"];
var list6Lima = ["arantza-burga.jpg","daguiana-revoredo.jpg","elizabeth-condori.jpg","grecia-rayme.jpg","janine-vega.jpg","michelle-more.jpg","mishel-velasquez.jpg","rosario-felix.jpg"];
var list4Chile = ["anais-araya.jpg","andrea-miranda.jpg","berenisse-ríos.jpg","caterina-da-silva.jpg","daniela-sanchez.jpg","francisca-ojeda.jpg","katerine-sandoval.jpg"];

function divImage(listaCoders,nameFile,promo){
      var contForDiv=document.getElementById(promo);
      for(var i=0;i<listaCoders.length;i++){
          var divForCoder=document.createElement("div");

  //Agregando el nombre
          var name=listaCoders[i];
          var cant=name.length;
          cant=cant-4;
          var name=name.substring(0,cant),
            patron = /-/g,
            nuevoValor    = " ",
          name = name.replace(patron, nuevoValor);
          name=name.toUpperCase();
          console.log(name);
    //
          contForDiv.appendChild(divForCoder);
          divForCoder.setAttribute("id",name);
          divForCoder.setAttribute("class","divCoder"+nameFile);
          var imgForCoder=document.createElement("img");
          imgForCoder.setAttribute("src","assets/image/"+nameFile+"/"+listaCoders[i]);
          imgForCoder.setAttribute("class",nameFile);
          divForCoder.appendChild(imgForCoder);
          var space=document.createElement("br");
          divForCoder.appendChild(space);
          var nameCoder=document.createElement("span");
          nameCoder.classList.add("nameCoder");
          nameCoder.innerHTML=name;
          divForCoder.appendChild(nameCoder);
      }
  }

  divImage(list4Chile,"4-chile","promo1");
  divImage(list5Lima,"5-lima","promo2");
  divImage(list6Lima,"6-lima","promo3");
  var showProm=document.getElementById("coderLab");
  var showProm4Chile=document.getElementById("promo1");
  var showProm5Lima=document.getElementById("promo2");
  var showProm6Lima=document.getElementById("promo3");
  showProm.onchange=function (){

    switch (showProm.value){
      case "allPromos":
          showProm4Chile.style.display = "block";
          showProm5Lima.style.display = "block";
          showProm6Lima.style.display = "block";
          break;
      case "4promoChile":
          showProm5Lima.style.display = "none";
          showProm6Lima.style.display = "none";
          showProm4Chile.style.display = "block";
          break;
      case "5promoLima":
          showProm4Chile.style.display = "none";
          showProm6Lima.style.display = "none";
          showProm5Lima.style.display = "block";
          break;
      case "6promoLima":
          showProm4Chile.style.display = "none";
          showProm5Lima.style.display = "none";
          showProm6Lima.style.display = "block";
          break;
    }
  }
