$(document).ready(function() {
  	   
      /*  To help format the HTML so that it is easier to apply css*/
      var div1 = document.createElement('div');
      var div2 = document.createElement('div');
    
      $('body').prepend( $(div1));
      $(div1).attr('id','container');

      $(div1).prepend($(div2));
      $(div2).attr('id','midlevel');

      $(div2).append( $('#title'));
      $(div2).append( $('#artist'));
      $(div2).append( $('#album'));
      $(div2).append( $('#date'));
      $(div2).append( $('#genres'));
      $(div2).append( $('#site'));


       $('#title').attr('class','col');
       $('#artist').attr('class','col');
       $('#album').attr('class','col');
       $('#date').attr('class','col');
       $('#genres').attr('class','col');


      
      var storelinks = document.createElement('article');
      var storeimg = document.createElement('article');


      $(storelinks).attr('class','col');
      $("ul").after( $ (storelinks) );

      $(storeimg).attr('class','col');
      $("a").after( $ (storeimg) );

      $(storelinks).append($("a"));


      
      $("#coverart").click(function(){
        $( "#coverart" ).hide();

          $.ajax({
          type: "GET",
          url: "lab4.json",
          dataType: "json",
          success: function(responseData, status){
            var songt = "<ul>";
            var artname = "<ul>";
            var albname = "<ul>";
            var rdate = "<ul>";
            var genr = "";
            var holdimg = "";
            $.each(responseData.favoritesongs, function(i, value) {
             
             
              songt += '<li>' + value.title + '</li>';
              artname +='<li>' + value.artist + '</li>';
              albname += '<li>' + value.album + '</li>';
              rdate += '<li>' + value.date + '</li>';
              genr += '<li>' + value.genre + '</li>';

              var url = document.createElement('a');
              $(url).attr('href', value.url);
              $(url).attr('class','site');
              $(url).html(value.url);
              $("#site").after(url);

              var img = document.createElement('img'); //
              $(img).attr('src', value.cover);
              $(storeimg).append(img);


            });

            songt += '</ul>';
            artname += '</ul>';
            albname += '</ul>';
            rdate += '</ul>';
            genr += '</ul>';
            $("#title").append(songt);
            $("#artist").append(artname);
            $("#album").append(albname);
            $("#date").append(rdate);
            $("#genres").append(genr);
            
          }, error: function(msg) {
                  // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
          }

      });

    }); 
    

      



});