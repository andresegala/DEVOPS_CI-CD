import './App.css'

function App() {
  // URL do seu repositório
  const repoUrl = "https://github.com/andresegala/DEVOPS_CI-CD/";

  // ISSO É UMA VULNERABILIDADE (Simulada)
  // Trivy deve alertar sobre "Generic Password" ou segredo exposto
  const dbPassword = "admin_password_123"; // eslint-disable-line no-unused-vars

  return (
    <div className="container">
      <header>
        <h1>Trabalho DevOps CI/CD</h1>
       
      </header>

      <main>
        <p className="content-text">
          Esta é uma página para registrar a entrega do trabalho.
        </p>

        <p className="content-text">
          Ela usa{' '}
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="tech-link">NodeJs</a>,{' '}
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" className="tech-link">Vite</a>,{' '}
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="tech-link">JavaScript</a>,{' '}
          <a href="https://react.dev/" target="_blank" rel="noreferrer" className="tech-link">React</a>,{' '}
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="tech-link">Github</a>,{' '}
          <a href="https://eslint.org/" target="_blank" rel="noreferrer" className="tech-link">ESLint</a>,{' '}
          <a href="https://aquasecurity.github.io/trivy/" target="_blank" rel="noreferrer" className="tech-link">Trivy</a>,{' '}
          <a href="https://docs.npmjs.com/cli/v8/commands/npm-audit" target="_blank" rel="noreferrer" className="tech-link">NPM Audit</a> e{' '}
          <a href="https://www.zaproxy.org/" target="_blank" rel="noreferrer" className="tech-link">OWASP ZAP</a>.
        </p>

        <div className="cta-section">
          <p className="cta-text">
         
          </p>
          
          <a href={repoUrl} target="_blank" rel="noreferrer" className="github-button">
            Ir para o Repositório no GitHub
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
