document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('#avatar')
    const nameElement = document.querySelector('#name')
    const usernameElement = document.querySelector('#username')
    const reposElement = document.querySelector('#repos')
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkProfileElement = document.querySelector('#link-profile')

        fetch('https://api.github.com/users/thaysoliveira-14')
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error (`Requisição da API falhou com o status ${resposta.json()}`)
            }
            return resposta.json()
        })
        .then(function (json) {
            avatarElement.src = json.avatar_url
            nameElement.innerHTML = json.name
            usernameElement.innerHTML = json.login
            reposElement.innerHTML = json.public_repos
            followersElement.innerHTML = json.followers
            followingElement.innerHTML = json.following
            linkProfileElement.href = json.html_url
        })
        .catch(function (error) {
            alert('Ocorreu um erro: Tente novamente mais tarde', error)
            console.error('Erro:', error)
        })
        .finally(function () {
            console.log('requisição finalizada')
        })
})