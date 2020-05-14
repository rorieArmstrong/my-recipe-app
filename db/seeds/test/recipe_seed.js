exports.seed = function(knex, Promise) {
    return knex('recipes').del() // Deletes ALL existing entries
      .then(function() { // Inserts seed entries one by one in series
        return knex('recipes').insert({
            id: 1,
            Title: "Pasta al Limone",
            Ingredients: "1 lemon, 12 oz. spaghetti, salt, ¾ cup heavy cream, 6 Tbsp. unsalted butter, 3 oz. finely grated Parmesan (about ¾ cup), Freshly ground black pepper",
            Method: "Using a vegetable peeler, remove two 2inch-long strips of lemon zest. Thinly slice each strip lengthwise into thin strands; set aside for serving. Finely grate remaining zest into a large pot (like a Dutch oven). Cut lemon in half and squeeze out enough juice to yield 2 Tbsp. into a small bowl; set aside. , Cook pasta in another large pot of boiling heavily salted water, stirring occasionally, until very al dente (pasta will finish cooking in the sauce). Meanwhile, add cream to pot with lemon zest and cook over medium heat, whisking often, until liquid is just beginning to simmer, about 2 minutes. Reduce heat to medium-low. Whisk in butter 1 Tbsp. at a time until melted and sauce is creamy and emulsified. Remove from heat. Just before pasta is al dente, scoop out 1½ cups pasta cooking liquid. Add ¾ cup pasta cooking liquid to cream sauce and return to medium heat. Using tongs, transfer spaghetti to pot with sauce (it’s okay if a little water comes along with it). Cook, tossing often and adding Parmesan little by little, until cheese is melted and sauce is creamy, about 3 minutes. If sauce looks tight, add 1–2 Tbsp. pasta cooking liquid. (Cream sauces tighten up very quickly as they cool, so it’s better to lean on the saucier side of things.) Stir in reserved lemon juice; season with more salt, if needed. Divide pasta among bowls. Season with pepper, then top with reserved lemon zest strips.",
            Dificulty: 2
            }, {
            id: 2,
            Title: "eget congue eget semper",
            Ingredients: "vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
            Method: "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue",
            Dificulty: 1
            }, {
            id: 3,
            Title: "nullam orci pede venenatis",
            Ingredients: "neque sapien placerat ante nulla",
            Method: "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",
            Dificulty: 2
            }, {
            id: 4,
            Title: "amet eleifend pede libero",
            Ingredients: "in leo maecenas pulvinar lobortis",
            Method: "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
            Dificulty: 4
            }, {
            id: 5,
            Title: "euismod",
            Ingredients: "dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
            Method: "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
            Dificulty: 2
            }, {
            id: 6,
            Title: "justo in blandit ultrices",
            Ingredients: "in faucibus orci luctus et ultrices posuere cubilia",
            Method: "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
            Dificulty: 5
            }, {
            id: 7,
            Title: "quis",
            Ingredients: "magna bibendum imperdiet nullam orci pede venenatis",
            Method: "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
            Dificulty: 1
            }, {
            id: 8,
            Title: "elit",
            Ingredients: "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
            Method: "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
            Dificulty: 2
            }, {
            id: 9,
            Title: "justo lacinia",
            Ingredients: "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
            Method: "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus",
            Dificulty: 5
            }, {
            id: 10,
            Title: "ut",
            Ingredients: "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
            Method: "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
            Dificulty: 4
            }, {
            id: 11,
            Title: "condimentum neque sapien placerat ante",
            Ingredients: "a feugiat et eros vestibulum ac est lacinia",
            Method: "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
            Dificulty: 2
            }, {
            id: 12,
            Title: "congue elementum in hac",
            Ingredients: "rutrum nulla tellus in sagittis dui vel nisl duis",
            Method: "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
            Dificulty: 2
            }, {
            id: 13,
            Title: "bibendum",
            Ingredients: "ultrices mattis odio donec vitae nisi nam ultrices",
            Method: "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien",
            Dificulty: 3
            }, {
            id: 14,
            Title: "phasellus in felis donec semper",
            Ingredients: "risus praesent lectus vestibulum quam sapien varius ut",
            Method: "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
            Dificulty: 4
            }, {
            id: 15,
            Title: "at lorem integer",
            Ingredients: "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
            Method: "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
            Dificulty: 5
            }, {
            id: 16,
            Title: "elementum pellentesque quisque porta",
            Ingredients: "duis faucibus accumsan odio curabitur convallis duis",
            Method: "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
            Dificulty: 3
            }, {
            id: 17,
            Title: "nulla pede",
            Ingredients: "vestibulum ac est lacinia nisi venenatis tristique fusce congue",
            Method: "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
            Dificulty: 3
            }, {
            id: 18,
            Title: "interdum",
            Ingredients: "magnis dis parturient montes nascetur ridiculus mus etiam vel",
            Method: "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
            Dificulty: 5
            }, {
            id: 19,
            Title: "varius integer ac",
            Ingredients: "purus aliquet at feugiat non",
            Method: "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
            Dificulty: 3
            }, {
            id: 20,
            Title: "libero non",
            Ingredients: "justo nec condimentum neque sapien placerat",
            Method: "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
            Dificulty: 3
            }, {
            id: 21,
            Title: "dapibus duis at velit eu",
            Ingredients: "vel est donec odio justo sollicitudin ut suscipit a feugiat et",
            Method: "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
            Dificulty: 2
            });
    });
};