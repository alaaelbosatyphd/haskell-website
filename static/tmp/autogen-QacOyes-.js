let input=document.querySelector('fileInfo');input.addEventListener('change',()=>{let files=input.files;if(files.length==0)return;const file=files[0];let reader=new FileReader();reader.onload=(e)=>{const file=e.target.result,lines=file.split(/\r\n|\n/)};reader.onerror=(e)=>alert(e.target.error.name);reader.readAsText(file)});document.getElementById("hident4").innerHTML="This text was added by the Javascript part of the homepage widget.";$(function(){$("#js-commentForm").submit(function(event){event.preventDefault();var message=$("#js-createCommentTextarea").val();if(!message){alert("Please fill out the comment form first.");return};$.ajax({url:'http://localhost:3000/comments',type:'POST',contentType:"application/json",data:JSON.stringify({message:message}),success:function(data){alert('http://localhost:3000/comments');var newNode=$("<li></li>");newNode.text(data.message);console.log(data);$("#js-commentList").append(newNode)},error:function(data){console.log("Error creating comment: "+data)}})})})