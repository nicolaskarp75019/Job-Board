import Job from "../components/Job";

const Jobs = () => {
  <div class="container">
    <div class="item">
      <Job
        className="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
    </div>
    <div class="item">
      <Job
        className="green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
    <div class="item">
      <Job
        className="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
    </div>
    <div class="item">
      <Job
        className="blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
    </div>
    <div class="item">
      <Job
        className="saumon"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
    </div>

    <div class="item">
      <Job
        className="red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
    </div>
    <div class="item">
      <Job
        className="green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
    </div>
    <div class="item">
      <Job
        className="yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
      />
    </div>

    <div class="item">
      <Job
        className="blue"
        title="Infirmer (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  </div>;
};

export default Jobs;
