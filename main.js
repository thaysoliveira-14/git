// Este trecho de código adiciona um ouvinte de evento que é acionado quando o DOM é completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Aqui, estamos selecionando elementos HTML pelo ID usando o método querySelecto e atribuindo esses elementos a variáveis para posterior manipulação
    const avatarElement = document.querySelector('#avatar')
    const nameElement = document.querySelector('#name')
    const usernameElement = document.querySelector('#username')
    const reposElement = document.querySelector('#repos')
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkProfileElement = document.querySelector('#link-profile')

        // Aqui, estamos fazendo uma requisição à API do GitHub para obter informações sobre um usuário específico
        fetch('https://api.github.com/users/thaysoliveira-14')
            
            // Esta função é executada quando a promise é resolvida
        .then(function (resposta) {
             // Verifica se a resposta da requisição é bem-sucedida
            if (!resposta.ok) {
                // Se a resposta não for bem-sucedida, lançamos um erro com o status da resposta
                throw new Error (`Requisição da API falhou com o status ${resposta.json()}`)
            }
            // Se a resposta for bem-sucedida, retornamos o corpo da resposta como JSON
            return resposta.json()
        })

            // Esta função é executada após a conversão da resposta para JSON
        .then(function (json) {
            // Atualizamos os elementos HTML com as informações obtidas da resposta JSON
            avatarElement.src = json.avatar_url
            nameElement.innerHTML = json.name
            usernameElement.innerHTML = json.login
            reposElement.innerHTML = json.public_repos
            followersElement.innerHTML = json.followers
            followingElement.innerHTML = json.following
            linkProfileElement.href = json.html_url
        })
            
        // Esta função é executada se houver algum erro durante o processamento da requisição
        .catch(function (error) {
            // Exibe um alerta ao usuário informando sobre o erro
            alert('Ocorreu um erro: Tente novamente mais tarde', error)
            // Registra o erro no console para fins de depuração
            console.error('Erro:', error)
        })
        .finally(function () {
            // Registra uma mensagem no console indicando que a requisição foi finalizada
            console.log('requisição finalizada')
        })
})
