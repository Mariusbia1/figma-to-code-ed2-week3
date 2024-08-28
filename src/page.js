//  // Fonction pour récupérer les détails de la crypto à partir de l'API
//  async function fetchCryptoDetails(id) {
//     try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
//         const data = await response.json();

//         // Afficher les détails sur la page
//         document.getElementById('nameCoin').innerText = data.name;
//         document.getElementById('price').innerText = `$${data.market_data.current_price.usd}`;
//         document.getElementById('rank').innerText = data.market_cap_rank;
//         document.getElementById('marketCap').innerText = `$${data.market_data.market_cap.usd}`;
//         document.getElementById('supply').innerText = `${data.market_data.circulating_supply} ${data.symbol.toUpperCase()}`;
//         document.getElementById('high').innerText = `$${data.market_data.high_24h.usd}`;
//         document.getElementById('low').innerText = `$${data.market_data.low_24h.usd}`;
//         document.getElementById('description').innerText = data.description.en;

//         // Créer le graphique
//         const ctx = document.createElement('canvas');
//         document.getElementById('graphic').appendChild(ctx);
//         createSparkline(data.market_data.sparkline_7d.price, ctx);

//     } catch (error) {
//         console.error('Erreur lors de la récupération des détails:', error);
//     }
// }

// // Fonction pour créer le graphique de variation
// function createSparkline(data, ctx) {
//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: data.map((_, index) => `Day ${index + 1}`),
//             datasets: [{
//                 data: data,
//                 borderColor: 'green',
//                 backgroundColor: 'rgba(76, 175, 80, 0.1)',
//                 fill: true,
//                 tension: 0.4
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: { display: false },
//                 y: { display: false }
//             },
//             elements: { point: { radius: 0 } },
//             plugins: { legend: { display: false } }
//         }
//     });
// }

// // Récupérer l'ID de la crypto à partir des paramètres de l'URL
// const params = new URLSearchParams(window.location.search);
// const id = params.get('id');
// if (id) {
//     fetchCryptoDetails(id);
// }


// Fonction pour récupérer l'ID de la crypto depuis l'URL
function getCryptoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
  
  // Fonction pour récupérer les détails de la crypto depuis l'API
  async function fetchCryptoDetails() {
    const cryptoId = getCryptoIdFromURL();
  
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
      const data = await response.json();
  
      // Met à jour les éléments HTML avec les informations de la crypto
      document.getElementById('Coin').textContent = data.name;
      document.getElementById('nameCoin').textContent = data.symbol.toUpperCase();
      document.getElementById('price').textContent = formatNumber(data.market_data.current_price.usd);
      document.getElementById('rank span').textContent = data.market_cap_rank;
      document.getElementById('marketCap span').textContent = formatNumber(data.market_data.market_cap.usd);
      document.getElementById('supply span').textContent = data.market_data.circulating_supply.toLocaleString('en-US');
      document.getElementById('high span').textContent = formatNumber(data.market_data.high_24h.usd);
      document.getElementById('low span').textContent = formatNumber(data.market_data.low_24h.usd);
      document.getElementById('description p').textContent = data.description.en || "No description available.";
  
      // Génère un graphique pour le prix (à adapter en fonction de tes besoins)
      const ctx = document.getElementById('graphic').getContext('2d');
      createSparkline(data.market_data.sparkline_7d.price, ctx);
  
    } catch (error) {
      console.error('Erreur lors de la récupération des détails:', error);
    }
  }
  
  // Appelle la fonction pour charger les détails
  fetchCryptoDetails();
  

//gestion des erreurs
  function getCryptoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const cryptoId = params.get('id');
    console.log('Crypto ID from URL:', cryptoId); // Vérification
    return cryptoId;
  }
  
  // Fonction pour récupérer les détails de la crypto depuis l'API
  async function fetchCryptoDetails() {
    const cryptoId = getCryptoIdFromURL();
  
    if (!cryptoId) {
      console.error('Aucun ID de crypto-monnaie fourni dans l\'URL');
      // Affiche un message d'erreur ou redirige vers une autre page si nécessaire
      return;
    }
  
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Met à jour les éléments HTML avec les informations de la crypto
      document.getElementById('Coin').textContent = data.name;
      document.getElementById('nameCoin').textContent = data.symbol.toUpperCase();
      document.getElementById('price').textContent = formatNumber(data.market_data.current_price.usd);
      document.getElementById('rank span').textContent = data.market_cap_rank;
      document.getElementById('marketCap span').textContent = formatNumber(data.market_data.market_cap.usd);
      document.getElementById('supply span').textContent = data.market_data.circulating_supply.toLocaleString('en-US');
      document.getElementById('high span').textContent = formatNumber(data.market_data.high_24h.usd);
      document.getElementById('low span').textContent = formatNumber(data.market_data.low_24h.usd);
      document.getElementById('description p').textContent = data.description.en || "No description available.";
  
      // Génère un graphique pour le prix (à adapter en fonction de tes besoins)
      const ctx = document.getElementById('graphic').getContext('2d');
      createSparkline(data.market_data.sparkline_7d.price, ctx);
  
    } catch (error) {
      console.error('Erreur lors de la récupération des détails:', error);
      // Affiche un message d'erreur dans l'interface utilisateur
      document.getElementById('Coin').textContent = 'Erreur lors du chargement des données.';
    }
  }
  
  // Appelle la fonction pour charger les détails
  fetchCryptoDetails();
  