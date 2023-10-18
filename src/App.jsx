
import { useTranslation } from 'react-i18next';

const lngs = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
]

const App = () => {

  const { t, i18n } = useTranslation();
  return (
    <div>
      {lngs.map((lng) => (
        <div key={lng.code}>
          <button onClick={() => i18n.changeLanguage(lng.code)}>
            {lng.name}
          </button>
        </div>
      ))}
      <h1>{t('app.welcome')} Williams</h1>
      <p>{t('app.fecha')} miercoles</p>
    </div>
  )
}

export default App

