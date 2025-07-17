import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Cross" className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Ника</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">О нас</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Товары</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ветеринарная аптека "Ника"</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Здоровье ваших питомцев — наша главная забота. Качественные лекарства, 
            корма и товары для всех видов животных
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
              Каталог товаров
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 group">
              <Icon name="MapPin" className="h-5 w-5 mr-2 text-white group-hover:text-green-600" />
              <span className="text-white group-hover:text-green-600">Наш адрес</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наши товары
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Pills" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Лекарства для животных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Широкий ассортимент ветеринарных препаратов для лечения и профилактики заболеваний у домашних животных
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Cookie" className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Корма для животных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Качественные корма для собак, кошек и других питомцев от проверенных производителей
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Gamepad2" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Игрушки и товары</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Игрушки, аксессуары и товары для ухода за вашими любимыми питомцами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">О нас</h3>
              <p className="text-gray-600 mb-4">
                Ветеринарная аптека «Ника» работает уже более 10 лет, предлагая 
                качественные лекарства, корма и товары для животных.
              </p>
              <p className="text-gray-600 mb-6">
                В нашем ассортименте: ветеринарные препараты, качественные корма 
                для всех видов питомцев, игрушки и аксессуары для ухода. 
                Мы гарантируем подлинность и качество всех товаров.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  <Icon name="CheckCircle" className="h-4 w-4 mr-1" />
                  Сертифицированные товары
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <Icon name="Users" className="h-4 w-4 mr-1" />
                  Опытные специалисты
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
                  Широкий ассортимент
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Товаров в наличии</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">10</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon name="Shield" className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Качество</h4>
              <p className="text-gray-600">
                Все товары сертифицированы и проходят строгий контроль качества. 
                Работаем только с проверенными поставщиками
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon name="Users" className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Опыт</h4>
              <p className="text-gray-600">
                Более 10 лет опыта работы с ветеринарными препаратами. 
                Поможем с выбором подходящих товаров для ваших питомцев
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon name="Heart" className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Забота</h4>
              <p className="text-gray-600">
                Мы понимаем, как важно здоровье ваших питомцев. 
                Предлагаем только качественные и безопасные товары
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5" />
                  <span>ул. Ветеринарная, 15, Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5" />
                  <span>info@nika-vetapteka.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5" />
                  <span>Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Готовы помочь вашим питомцам?</h4>
              <p className="mb-6 opacity-90">
                Приходите к нам в аптеку или свяжитесь с нами для получения информации о товарах
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Icon name="MapPin" className="h-5 w-5 mr-2" />
                  Как проехать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Cross" className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">Ника</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Ветеринарная аптека "Ника". Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index