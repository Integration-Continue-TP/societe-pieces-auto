import React, { Component } from 'react';

class ClientProducts extends Component {
    render() {

        const productList = [
            {
                id: 0,
                libelle: 'Produit 0',
                prix: 50.00
            },
            {
                id: 1,
                libelle: 'Produit 1',
                prix: 150.00
            },
            {
                id: 2,
                libelle: 'Produit 2',
                prix: 250.00
            },
            {
                id: 3,
                libelle: 'Produit 3',
                prix: 350.00
            }
        ];

        const renderProducts = productList.map((product, index) => {
            return (
                <div key={index} className="product">
                    <div className="card">
                        <img className="card-img-top" src="https://via.placeholder.com/280x180" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.libelle}</h5>
                            <p className="card-text">Coût du produit: {product.prix}€</p>
                            <a href="#" className="btn btn-primary">Acheter</a>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="ManagementProducts">
                <button type="button" className="btn btn-danger logout-btn">Déconnexion</button>
                <h2>Liste des pièces avec leur prix (Client no. 2)</h2>
                <hr/>
                <div className="products">
                    {renderProducts}
                </div>
            </div>
        );
    }

}

export default ClientProducts;
