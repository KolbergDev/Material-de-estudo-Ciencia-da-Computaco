import { useState } from 'react';

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProdutoCard({ produto, onAdicionar }) {
  const disponivel = produto.estoque > 0;


  const [favorito, setFavorito] = useState(false);

  return (
    <div className="col-12 col-md-6 col-xl-4">
      <article className="card produto-card h-100 shadow-sm">
        <div className="produto-imagem" role="img" aria-label={`Ilustração de ${produto.nome}`}>{produto.icone}</div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <span className="badge text-bg-light align-self-start">{produto.categoria}</span>

           
            <button
              type="button"
              className={favorito ? 'btn btn-danger btn-sm' : 'btn btn-outline-danger btn-sm'}
              onClick={() => setFavorito(!favorito)}
              aria-pressed={favorito}
              aria-label={favorito ? `Remover ${produto.nome} dos favoritos` : `Adicionar ${produto.nome} aos favoritos`}
            >
              {favorito ? '♥ Favorito' : '♡ Favoritar'}
            </button>
          </div>

          <h3 className="card-title h5">{produto.nome}</h3>
          <p className="card-text text-secondary small">{produto.descricao}</p>
          <p className="fs-5 fw-bold text-primary mt-auto mb-1">{formatarPreco(produto.preco)}</p>
          <p className={disponivel ? 'small text-success' : 'small text-danger'}>
            {disponivel ? `${produto.estoque} em estoque` : 'Produto indisponível'}
          </p>
          <button
            className="btn btn-primary"
            type="button"
            disabled={!disponivel}
            aria-label={disponivel ? `Adicionar ${produto.nome}` : `${produto.nome} indisponível`}
            onClick={() => onAdicionar(produto)}
          >
            {disponivel ? 'Adicionar' : 'Indisponível'}
          </button>
        </div>
      </article>
    </div>
  );
}
