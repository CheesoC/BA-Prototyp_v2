<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

// Prototyp aus URL-Parameter lesen
const prototypeId = computed(() => {
  const p = route.query.p
  return p ? parseInt(p) : null
})

// Start-URL erstellen - berücksichtigt Prototyp-Parameter
const studyStartUrl = computed(() => {
  if (prototypeId.value) {
    return `/?p=${prototypeId.value}&l=1`
  }
  return '/level-1' // Fallback für direkten Zugriff ohne Parameter
})
</script>

<template>
  <div class="landing-page">
    <div class="content-container">
      <h1 class="main-title">Willkommen zur Studie</h1>
      <p class="description">
        Sie testen heute einen Prototypen für eine Digitale Aufgabenumgebung
      </p>
      <div class="task-section">
        <h2 class="task-title">Ihre Aufgabe:</h2>
        <ul class="task-list">
          <li>Spielen Sie bitte alle 3 Level mit jeweils 8 Fragen durch</li>
          <li>Nach jedem Level wechseln Sie zurück zum Fragebogen und füllen ihn bis zur gekennzeichneten Stelle aus</li>
          <li>Es gibt kein richtig oder falsch, probieren Sie einfach alles aus, Antworten sie bitte auch bitte mindestens einmal Falsch, um zu sehen wie die Seite reagiert</li>
        </ul>
      </div>
      <div class="closing-message">
        <h3 class="closing-title">Nach dem Drücken des Buttons startet das erste Level</h3>
        <h2 class="closing-title">Viel Spaß und Danke für Ihre Teilnahme!</h2>
      </div>
      <div class="action-area">
        <RouterLink :to="studyStartUrl" class="start-button">
          Studie starten
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #4a66e2 0%, #7b23d3 100%);
  position: fixed;
  top: 0;
  left: 0;
}

.content-container {
  text-align: center;
  max-width: 800px;
  width: 100%;
  padding: 3rem 2rem;
  color: white;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

.task-section {
  margin-bottom: 2.5rem;
}

.task-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  display: inline-block;
  max-width: 700px;
}

.task-list li {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  padding: 0.8rem 0;
  position: relative;
  padding-left: 2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem;
}

.task-list li::before {
  content: "✓";
  color: #4CAF50;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.6rem;
  background: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.closing-message {
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
}

.closing-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
}

.action-area {
  margin-top: 2rem;
}

.start-button {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.start-button:hover {
  transform: translateY(-3px);
  background: white;
  color: #667eea;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.start-button:active {
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .description {
    font-size: 1.2rem;
  }
  
  .task-title {
    font-size: 1.3rem;
  }
  
  .task-list li {
    font-size: 1.2rem;
  }
  
  .closing-title {
    font-size: 1.4rem;
  }
  
  .content-container {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .task-title {
    font-size: 1.2rem;
  }
  
  .task-list li {
    font-size: 1.1rem;
  }
  
  .closing-title {
    font-size: 1.3rem;
  }
  
  .start-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .content-container {
    padding: 1.5rem 1rem;
  }
}
</style>