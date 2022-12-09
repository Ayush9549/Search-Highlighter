function search(e) 
{
	let searched = document.getElementById("search").value.trim();
	
  if (searched !== "") 
  {
  	let text = document.getElementById("container").innerHTML;
  	let re = new RegExp(searched,"g"); 
	let newText = text.replace(re, `<mark>${searched}</mark>`);
	document.getElementById("container").innerHTML = newText;
  }
}