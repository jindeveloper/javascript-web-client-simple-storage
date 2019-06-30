# javascript-web-client-simple-storage
What is HTML Client Storage?

In the old days, until today most developers are used to the idea of always making a round trip to the server every time they needed data. However; today the web is changing there are some types of data that you don’t want to have a round trip to the server every time you need it, and as a user, you’ll feel the performance being severely impacted your web-application.

The first time I learned this client storage I never thought that we could store data on the local machine. This gives us a balance between server side and client side processing which is magic by the way. In this post, we are going to explore the simple client storage.

What are the types of Client Side Storage?

Simple Web Storage are localStorage and sessionStorage
Complex Web Storage is IndexedDB

What are the differences between localStorage and sessionStorage?

The main difference between the two is that localStorage persist in the local hard-drive which means stores data forever as long as you delete it. However; sessionStorage only persists data until you close your browser which means it last as long as the page in open (tied to a single page or opened tabs).


