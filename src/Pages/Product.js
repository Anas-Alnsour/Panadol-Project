import React from 'react';
import './Product.css';
import actifastImage from '../img/actifast.png';
import advanceImage from '../img/Panadol Advance.png';
import babyAndInfantImage from '../img/Panadol Baby & Infant (Suspension).png';
import coldFluAllInOneImage from '../img/Panadol Cold & Flu All in One.png';
import coldFluDayImage from '../img/Panadol Cold & Flu Day.png';
import coldFluVapourReleaseImage from '../img/Panadol Cold & Flu Vapour Release + Decongestant.png';
import coldFluImage from '../img/Panadol Cold & Flu.png';
import elixirImage from '../img/Panadol Elixir.png';
import extraOptizorbImage from '../img/Panadol Extra with Optizorb Formulation.png';
import jointImage from '../img/Panadol Joint (Osteoarthritis Pain Relief).png';
import migraineImage from '../img/Panadol Migraine.png';
import nightImage from '../img/Panadol Night.png';
import sinusImage from '../img/Panadol Sinus.png';
import womanImage from '../img/Panadol Woman.png';
import panaNaturalCoughSyrupImage from '../img/PanaNatural Cough Syrup.png';


function Products() {
  return (
    <div className="app-container">
      <header className="header-section">
        <h1 className="title">Product</h1>
        <p>
          Panadol offers a range of formulations, including tablets, liquids, and soluble versions, catering to different patient needs and preferences.
          This accessibility has made Panadol a trusted choice for individuals seeking relief from everyday ailments.
        </p>
      </header>

      <div className="cards-section">
        <div className="card" style={{ backgroundColor: '#f8bbd0' }}>
          <img src={actifastImage} alt="Product" className="card-image" />
          <h2>Panadol Actifast</h2>
          <p>Panadol Actifast is absorbed twice as fast as regular Panadol tablets, helping you to get back to the things you enjoy, more quickly.
                When you want fast pain relief from headaches and toothaches choose Panadol Actifast. Like other Panadol tablets, Panadol Actifast is gentle on the stomach when used as directed.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#bbdefb' }}>
          <img src={advanceImage} alt="Product" className="card-image" />
          <h2>Panadol Advance</h2>
          <p>Panadol Advance is an advanced formulation of paracetamol that contains Optizorb. Unlike some pain relievers that can sit in your stomach, Panadol Advance starts to release its medicine in as little as 5 minutes – and still has the safety profile you trust from Panadol.

Panadol Advance is gentle on stomach when used as directed.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#c8e6c9' }}>
          <img src={jointImage} alt="Product" className="card-image" />
          <h2>Panadol Joint</h2>
          <p>Panadol Joint is a sustained release formulation that can provide long-lasting relief from joint pain such as that associated with Osteoarthritis. Panadol Joint can be a convenient choice, containing a higher dose of paracetamol than regular Panadol tablets. Panadol Joint may provide up to 8 hour relief from pain.

Panadol Joint is a unique bi-layer caplet incorporating an immediate-release and a sustained release dose of paracetamol. Paracetamol is released in 2 stages, with the first stage being released quickly, for rapid onset of action, and the second stage being released slowly over the day or night, to provide prolonged pain relief.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ffcc80' }}>
          <img src={extraOptizorbImage} alt="Product" className="card-image" />
          <h2>Panadol Extra Tablets with Optizorb Formulation</h2>
          <p>Panadol Extra with Optizorb is ideal for those who want the benefits of Panadol, plus a little more pain relieving effect on tough pain. The Ingredients in Panadol Extra with Optizorb relieves pain 3 times more effective than standard paracetamol. It also contains Optizorb technology to get to work in as little as 10 minutes.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#d1c4e9' }}>
          <img src={nightImage} alt="Product" className="card-image" />
          <h2>Panadol Night</h2>
          <p>Panadol Night contains two active ingredients, Paracetamol which is an analgesic (a pain reliever which relieves aches) and antipyretic (reduces body temperature when you have a fever) and Diphenhydramine hydrochloride, an antihistamine with additional sedative properties.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ffab91' }}>
          <img src={migraineImage} alt="Product" className="card-image" />
          <h2>Panadol Migraine</h2>
          <p>Panadol Migraine is an effective (over the counter) OTC migraine treatment. In clinical studies, patients with moderate to severe migraines experienced effective relief with just one dose. Migraine symptoms may vary, but often start on one side of the head, along with pulsating or throbbing pain. This can be combined with nausea, vomiting, and sensitivity to light and sound.

Panadol Migraine contains acetylsalicylic acid, paracetamol and therapeutically active caffeine.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#90caf9' }}>
          <img src={womanImage} alt="Product" className="card-image" />
          <h2>Panadol Woman</h2>
          <p>Panadol Woman provides relief for tough period pain and abdominal cramps. It contains Paracetamol which has pain relieving and fever reducing properties, and hyoscine butylbromide which acts as Antispasmodics. Hyoscine acts on muscarinic receptors located on the smooth-muscle cells of the GI tract and uterus to relieve abdominal cramping and pain.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#a5d6a7' }}>
          <img src={coldFluDayImage} alt="Product" className="card-image" />
          <h2>Panadol Cold & Flu Day</h2>
          <p>Panadol Cold & Flu Day caplets provide relief from Major Cold and flu symptoms. It is a non-drowsy formulation for day time relief.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ffe082' }}>
          <img src={coldFluImage} alt="Product" className="card-image" />
          <h2>Panadol Cold & Flu (Night)</h2>
          <p>Panadol Cold & Flu caplets provide night time relief from Cold and flu symptoms.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#b2dfdb' }}>
          <img src={coldFluVapourReleaseImage} alt="Product" className="card-image" />
          <h2>Panadol Cold & Flu Vapour Release + Decongestant</h2>
          <p>Panadol Cold & Flu Vapour Release + Decongestant is recommended for relief of common cold symptoms including headache, sore throat, nasal congestion and sinusitis, and their associated body pain, aches and fever.
          Its also recommended for relief of sinusitis symptoms such as sinus headache, pain and nasal congestion.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#e1bee7' }}>
          <img src={sinusImage} alt="Product" className="card-image" />
          <h2>Panadol Sinus</h2>
          <p>Panadol Sinus Caplets provide relief from Sinus pain and Congestion.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ffccbc' }}>
          <img src={coldFluAllInOneImage} alt="Product" className="card-image" />
          <h2>Panadol Cold & Flu All In One</h2>
          <p>Panadol Cold & Flu All in one tablet provide relives from cold & flu symptoms including chesty cough.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#b2ebf2' }}>
          <img src={panaNaturalCoughSyrupImage} alt="Product" className="card-image" />
          <h2>PanaNatural Syrup</h2>
          <p>There are few things more annoying than having a tough cough.

PanaNatural has a solution, so you can show your worst cough what a powerful natural relief is all about.

PanaNatural Cough Syrup is 100% Natural and scientifically proven to relief symptoms associated with both wet and dry coughs.

Made with natural igredients like honey, extracts of ribwort plantain, marshmallow and agrimony to fight cough symptoms naturally. The syrup has a honey and raspberry taste</p>
        </div>

        <div className="card" style={{ backgroundColor: '#fff59d' }}>
          <img src={babyAndInfantImage} alt="Product" className="card-image" />
          <h2>Panadol Baby & Infant (Suspension)
          *From 2 months</h2>
          <p>0-5 Years
 Children’s Panadol Suspension can be used for kids aged up to 5 years to provide effective pain and fever relief, while also being gentle on little stomachs. It comes in child-friendly raspberry flavour.

Effective for: high temperature (fever), teething pain, pain and fever after immunisation, earache, headache, cold and flu symptoms.</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ff80ab' }}>
          <img src={elixirImage} alt="Product" className="card-image" />
          <h2>Panadol Elixir
          5-12 Years</h2>
          <p>The children’s Panadol for kids aged five to twelve years provides fast, effective pain and fever relief, while also being gentle on children’s stomachs. It comes in with a child-friendly Raspberry flavour.

When it comes to getting effective pain relief for older kids, Panadol Elixir 5-12 Years is another great option. Its tasty raspberry flavour makes for a quick, drinkable pain reliever.

Children’s Panadol Elixir 5-12 years is effective for reducing fever and relieving: teething pain, immunisation pain, earache, headache, and pain and discomfort associated with cold and flu symptoms.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
