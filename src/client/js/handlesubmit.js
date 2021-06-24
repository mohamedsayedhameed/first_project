import json from '../../server/mockAPI';

const fetch = require('node-fetch')
const posturl = async(url='', data={})=>{
    console.log('step g')
    console.log(data),
    console.log(JSON.stringify(data))
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data)

    });
    try{
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let article_url = document.getElementById('name').value
    console.log(article_url)
    console.log('checked')
    if(Client.validateUrl(article_url)){
        console.log('step 2')
        posturl('http://localhost:8082/getdata',{url : article_url})
        .then((res)=>{
            console.log(res)
            document.getElementById('subjectivity').innerHTML = `subjectivity: ${res.subjectivity}`
            document.getElementById('confidence').innerHTML = `confidence: ${res.confidence}`
            document.getElementById('irony').innerHTML = `irony: ${res.irony}`
            document.getElementById('agreement').innerHTML = `agreement: ${res.agreement}`
            document.getElementById('score_tag ').innerHTML = `score_tag : ${res.score_tag }`
        })
    } else {
        alert('please enter a valid url');
    }
    

}

export { handleSubmit }