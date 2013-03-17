(function($) {


     $.fn.ISAutoComp = function(options) {
          return this.each(function() {
             var settings = $.extend( {
              'library'         : 'jquery-ui',
              'category'        : 'school',
              }, options);
             switch(settings['library'])
             {
                case 'jquery-ui':
                  $(this).autocomplete( { 
                    source: function(request,response) {
                     $.ajax ( {
                        url : 'http://ec2-50-16-55-13.compute-1.amazonaws.com/solr/select',
                        //dataType : 'jsonp',
                        cacheResults : true,
                        //jsonp: 'json.wrf',

                        data: {
                                'wt' : 'json',
                                'q' : "cat:"+settings['category']+" "+"alt:"+request.term,
                                'fl' : 'name',
                                
                        },
                        success : function(data)
                        {
                          ret = new Array();
                          console.log(data);
                          d = JSON.parse(data)
                          for (var i=0; i< d.response.docs.length;i++)
                            {
                              console.log(d.response.docs[i]["name"])
                              ret.push(d.response.docs[i]["name"]);
                            }
                          response(ret);
                        },

                     });
                     }}); 
                  break;
                case 'bootstrap':
                 $(this).typeahead({
                     source: function (query, process) {
                              return $.get('data2.json', { query: query }, function (data) {
                                           return process(data.options);
                                                  });
                                                     }
                }); 
             }
            
          });
     };
})(jQuery);
