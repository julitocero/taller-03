import './CursoCard.css'

export default function CursoCard({image, title, description, level}) {
  return (
    <>
    <div className="card-com">
      <div className="card-image">{image}</div>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <button className="card-button">{level}</button>
    </div>
    </>
  );
}