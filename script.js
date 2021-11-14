
const title_el=document.getElementById("title");
const body_el=document.getElementById("body");



// function submit1(){
// const textEntered1=title_el.value;
// const textEntered2=body_el.value;

// 	console.log(textEntered1);
// console.log(textEntered2);
// }
	
function addPost(){

	const textEntered1=title_el.value;
const textEntered2=body_el.value;

	// console.log(textEntered1);
 // console.log(textEntered2);
    
  URL=" https://jsonplaceholder.typicode.com/posts";
	fetch( URL, {
		method: "post",

		headers: {
			"Content-type": "application/json; charset=UTF-8"
		          },

		        body: JSON.stringify({
        	title: textEntered1,
        	body: textEntered2
                          })
		        


	})
	.then((res)=>res.json())
	.then((data)=>console.log(data))
}


