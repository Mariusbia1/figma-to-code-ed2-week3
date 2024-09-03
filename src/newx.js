document.addEventListener("DOMContentLoaded", async () => {
    const newsUrl = '/v1/cryptocurrency/listings/latest'; // Utilise une URL relative pour le proxy

    try {
        const response = await fetch(newsUrl);

        // Affiche le texte brut de la réponse
        const responseText = await response.text();
        console.log('Réponse brute:', responseText);

        // Essaie de parser la réponse en JSON
        const data = JSON.parse(responseText);

        // Vérifie si la requête a été réussie
        if (data.status.error_code === 0) {
            const newsContainer = document.getElementById('cryptoNewsContainer');
            newsContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter les nouvelles

            // Boucle pour chaque cryptomonnaie
            data.data.forEach(crypto => {
                const newsCard = document.createElement('div');
                newsCard.className = 'border rounded-lg p-3 mb-4';

                // Remplacez avec les propriétés correctes des images et logos obtenues de l'API
                const logoUrl = crypto.logo || 'default_logo_path'; // Chemin du logo ou un chemin par défaut
                const imageUrl = crypto.image || 'default_image_path'; // Chemin de l'image ou un chemin par défaut

                newsCard.innerHTML = `
                    <div class="flex flex-row items-center mb-2">
                        <img src="${logoUrl}" alt="logo" class="w-8 h-8">
                        <div class="ml-2">
                            <h1 class="font-semibold">${crypto.name}</h1>
                            <span class="text-sm text-gray-500">Price: $${crypto.quote.USD.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="mb-2">
                        <img src="${imageUrl}" alt="News Image" class="w-full h-32 object-cover rounded-lg">
                    </div>
                    <div class="mb-2">
                        <h1 class="font-semibold text-lg">${crypto.symbol}</h1>
                        <p class="text-sm text-gray-600">Market Cap: $${crypto.quote.USD.market_cap.toFixed(2)}</p>
                        <p class="text-sm text-gray-600">Volume 24h: $${crypto.quote.USD.volume_24h.toFixed(2)}</p>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                            <div class="flex items-center mr-4">
                                <span class="material-symbols-outlined text-red-500">favorite</span>
                                <span class="ml-1 text-sm">${crypto.likes || 0}</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-blue-500">chat</span>
                                <span class="ml-1 text-sm">${crypto.comments || 0}</span>
                            </div>
                        </div>
                    </div>
                `;

                newsContainer.appendChild(newsCard);
            });
        } else {
            console.error('Erreur dans la récupération des données:', data.status.error_message);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
});
