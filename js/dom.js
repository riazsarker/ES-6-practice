document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'green';
    }
})

document.getElementById('center-thrid').addEventListener('click',function(){
    const third = document.getElementById('thrid-friend');
    third.style.textAlign='center'
});

document.getElementById('add-friend').addEventListener('click',function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML =`
    <h3 class="friend-name">New friend</h3>
    <p>somthing new added</p>
    `
    friendContainer.appendChild(friend);
})