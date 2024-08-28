// // Fonction pour formater les nombres avec des séparateurs de milliers
// function formatNumber(num) {
//   return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// }

// // Fonction pour créer un petit graphe pour les 7 derniers jours
// function createSparkline(data, ctx) {
//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: data.map((_, index) => `Day ${index + 1}`),
//       datasets: [
//         {
//           data: data,
//           borderColor: 'green', // Couleur de la ligne
//           backgroundColor: 'white', // Fond transparent
//           fill: true,
//           tension: 0.4, // Lissage de la ligne
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         x: { display: false },
//         y: { display: false },
//       },
//       elements: { point: { radius: 0 } }, // Supprime les points
//       plugins: { legend: { display: false } }, // Cache la légende
//     },
//   });
// }

// // Fonction pour récupérer les données de l'API CoinGecko
// async function fetchCryptoData() {
//   try {
//     const response = await fetch(
//       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
//     );
//     const data = await response.json();

//     // Sélectionne le corps du tableau
//     const tableBody = document.getElementById('crypto-table-body');

//     // Efface les anciennes données (si besoin)
//     tableBody.innerHTML = '';

//     // Parcourt les données et les injecte dans le tableau
//     data.forEach((coin, index) => {

//       console.log(coin.id);
//       const row = document.createElement('tr');
//       row.classList.add('border-b');

//       row.innerHTML = `<tr>
//         <td>&#9734;</td>
//         <td>${index + 1}</td>
//         <td class="flex items-center">
//           <a href="details.html?id=${coin.id}" class="flex items-center">
//             <img src="${coin.image}" alt="${coin.name} logo" class="w-5 h-5 mr-2">
//             <span>${coin.name} - ${coin.symbol.toUpperCase()}</span>
//           </a>
//         </td>
//         <td>${formatNumber(coin.current_price)}</td>
//         <td class="${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}">
//           ${coin.price_change_percentage_24h.toFixed(2)}%
//         </td>
//         <td>${formatNumber(coin.total_volume)}</td>
//         <td>${formatNumber(coin.market_cap)}</td>
//         <td><canvas id="sparkline-${index}" class="w-32 h-10"></canvas></td>
//         </tr>
//       `;

//       tableBody.appendChild(row);

//       // Génère le petit graphe pour chaque crypto
//       const ctx = document.getElementById(`sparkline-${index}`).getContext('2d');
//       createSparkline(coin.sparkline_in_7d.price, ctx);
//     });
//   } catch (error) {
//     console.error('Erreur lors de la récupération des données:', error);
//   }
// }

// // Appelle la fonction pour charger les données
// fetchCryptoData();





// //gegstion des erreurs

// async function fetchCryptoData() {
//   try {
//     const response = await fetch(
//       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
//     );

//     // Vérifie si la réponse est correcte
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     // Vérifie si les données contiennent les informations attendues
//     if (!Array.isArray(data) || data.length === 0) {
//       throw new Error('Aucune donnée reçue de l\'API');
//     }

//     const tableBody = document.getElementById('crypto-table-body');
//     tableBody.innerHTML = '';

//     data.forEach((coin, index) => {
//       const row = document.createElement('tr');
//       row.classList.add('border-b');

//       row.innerHTML = `
//         <td>&#9734;</td>
//         <td>${index + 1}</td>
//         <td class="flex items-center">
//           <img src="${coin.image}" alt="${coin.name} logo" class="w-5 h-5">
//           <span>${coin.name} - ${coin.symbol.toUpperCase()}</span>
//         </td>
//         <td>${formatNumber(coin.current_price)}</td>
//         <td class="${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}">
//           ${coin.price_change_percentage_24h.toFixed(2)}%
//         </td>
//         <td>${formatNumber(coin.total_volume)}</td>
//         <td>${formatNumber(coin.market_cap)}</td>
//         <td><canvas id="sparkline-${index}" class="w-32 h-12"></canvas></td>
//       `;

//       tableBody.appendChild(row);

//       const ctx = document.getElementById(`sparkline-${index}`).getContext('2d');
//       createSparkline(coin.sparkline_in_7d.price, ctx);
//     });
//   } catch (error) {
//     console.error('Erreur lors de la récupération des données:', error);
//     // Affiche un message d'erreur dans l'interface utilisateur si nécessaire
//     const tableBody = document.getElementById('crypto-table-body');
//     tableBody.innerHTML = '<tr><td colspan="8">Erreur lors du chargement des données. Veuillez réessayer plus tard.</td></tr>';
//   }
// }

// // Appelle la fonction pour charger les données
// fetchCryptoData();

// //pour mettre à jour les données dynamiquement en fonction des catégories choisis
//   document.querySelector('select').addEventListener('change', function() {
//     const selectedCategory = this.value;

//     // Logique pour mettre à jour les données du graphique en fonction de la catégorie sélectionnée
//     // Par exemple, tu peux faire un appel API pour obtenir les données de prix

//     // Exemple pour mettre à jour les données du graphique :
//     priceChart.data.datasets[0].data = [/* nouvelles données */];
//     priceChart.update();
// });




//ici


// Fonction pour formater les nombres avec des séparateurs de milliers
function formatNumber(num) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

// Fonction pour créer un petit graphe pour les 7 derniers jours
function createSparkline(data, ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, index) => `Day ${index + 1}`),
      datasets: [
        {
          data: data,
          borderColor: 'green', // Couleur de la ligne
          backgroundColor: 'white', // Fond transparent
          fill: true,
          tension: 0.4, // Lissage de la ligne
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { display: false },
        y: { display: false },
      },
      elements: { point: { radius: 0 } }, // Supprime les points
      plugins: { legend: { display: false } }, // Cache la légende
    },
  });
}

// Fonction pour récupérer les données de l'API CoinGecko
async function fetchCryptoData() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
    );

    // Vérifie si la réponse est correcte
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Vérifie si les données contiennent les informations attendues
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Aucune donnée reçue de l\'API');
    }

    // Sélectionne le corps du tableau
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = ''; // Efface les anciennes données

    // Parcourt les données et les injecte dans le tableau
    data.forEach((coin, index) => {
      const row = document.createElement('tr');
      row.classList.add('border-b');

      row.innerHTML = `
        <td>&#9734;</td>
        <td>${index + 1}</td>
        <td class="flex items-center">
          <a href="details.html?id=${coin.id}" class="flex items-center">
            <img src="${coin.image}" alt="${coin.name} logo" class="w-5 h-5 mr-2">
            <span>${coin.name} - ${coin.symbol.toUpperCase()}</span>
          </a>
        </td>
        <td>${formatNumber(coin.current_price)}</td>
        <td class="${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
        <td>${formatNumber(coin.total_volume)}</td>
        <td>${formatNumber(coin.market_cap)}</td>
        <td><canvas id="sparkline-${index}" class="w-32 h-12"></canvas></td>
      `;

      tableBody.appendChild(row);

      // Génère le petit graphe pour chaque crypto
      const ctx = document.getElementById(`sparkline-${index}`).getContext('2d');
      createSparkline(coin.sparkline_in_7d.price, ctx);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = '<tr><td colspan="8">Erreur lors du chargement des données. Veuillez réessayer plus tard.</td></tr>';
  }
}

// Appelle la fonction pour charger les données
fetchCryptoData();

// Pour mettre à jour les données dynamiquement en fonction des catégories choisies
document.querySelector('select').addEventListener('change', async function() {
  const selectedCategory = this.value;

  // Logique pour mettre à jour les données du graphique en fonction de la catégorie sélectionnée
  // Par exemple, faire un appel API pour obtenir les données de prix
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${selectedCategory}&per_page=10&page=1&sparkline=true`);
    const data = await response.json();

    // Mettre à jour les données du tableau avec les nouvelles données
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = '';

    data.forEach((coin, index) => {
      const row = document.createElement('tr');
      row.classList.add('border-b');

      row.innerHTML = `
        <td>&#9734;</td>
        <td>${index + 1}</td>
        <td class="flex items-center">
          <a href="details.html?id=${coin.id}" class="flex items-center">
            <img src="${coin.image}" alt="${coin.name} logo" class="w-5 h-5 mr-2">
            <span>${coin.name} - ${coin.symbol.toUpperCase()}</span>
          </a>
        </td>
        <td>${formatNumber(coin.current_price)}</td>
        <td class="${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
        <td>${formatNumber(coin.total_volume)}</td>
        <td>${formatNumber(coin.market_cap)}</td>
        <td><canvas id="sparkline-${index}" class="w-32 h-12"></canvas></td>
      `;

      tableBody.appendChild(row);

      const ctx = document.getElementById(`sparkline-${index}`).getContext('2d');
      createSparkline(coin.sparkline_in_7d.price, ctx);
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des données:', error);
    // Affiche un message d'erreur si nécessaire
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = '<tr><td colspan="8">Erreur lors du chargement des données. Veuillez réessayer plus tard.</td></tr>';
  }
});



