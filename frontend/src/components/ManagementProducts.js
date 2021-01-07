import React, { Component } from 'react';

class ManagementProducts extends Component {

    constructor(props) {
        super(props);
    }

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
                                <p className="card-text">Coût de production: {product.prix}€</p>
                            </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="ManagementProducts">
                <button type="button" className="btn btn-danger logout-btn">Déconnexion</button>
                <h2>Liste des pièces avec leur coût de production</h2>
                <div className="form-group">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Sélectionner un client</option>
                        <option value="1">Monsieur A Z - Contrat Cadre no. 1</option>
                        <option value="1">Monsieur E R - Contrat Cadre no. 2</option>
                        <option value="1">Monsieur T Y - Contrat Cadre no. 3</option>
                    </select>
                </div>
                <hr/>
                <div className="products">
                    {renderProducts}
                </div>
            </div>
        );
    }
}

export default ManagementProducts;
