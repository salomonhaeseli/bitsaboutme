import React, { Component } from 'react';
import Cards from './components/Cards'
import Categories from './components/Categories'
import FilterButton from './components/FilterButton'
import Filter from './components/Filter'

import Alle from './images/icons/Alle.svg'
import Beliebt from './images/icons/Beliebt.svg'
import FürDich from './images/icons/FürDich.svg'
import GuterZweck from './images/icons/GuterZweck.svg'
import Marktforschung from './images/icons/Marktforschung.svg'
import Newsletter from './images/icons/Newsletter.svg'
import { clone, filterCards } from './lib'
import { cards } from './fixtures'


import './bitsaboutme.css'

class App extends Component{
  state= {
    details: [{}],
    categories: [
      {
        name: 'Alle Deals',
        image: Alle,
        active: true,
        id: Math.random()
      },
      {
        name: 'Für dich',
        image: FürDich,
        active: false,
        id: Math.random()
      },
      {
        name: 'Beliebt',
        image: Beliebt,
        active: false,
        id: Math.random()
      },
      {
        name: 'Newsletter',
        image: Newsletter,
        active: false,
        id: Math.random()
      },
      {
        name: 'Guter Zweck',
        image: GuterZweck,
        active: false,
        id: Math.random()
      },
      {
        name: 'Einkaufsdaten',
        image: Marktforschung,
        active: false,
        id: Math.random()
      }
    ],
    data: [
      {
        name: 'Persönliche Angaben',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Demografische Angaben',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Abgeleitete Daten',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Anonyme IDs',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Einzelhandel',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Interessen und Hobbies',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Internet',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Streaming Medien',
        isSelected: false,
        id: Math.random()
      },
    ],
    purpose: [
      {
        name: 'Operationen',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Direktmarketing',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Profilerstellung',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Forschungsanalyse',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Gezielte Werbung',
        isSelected: false,
        id: Math.random()
      },
    ],
    processing: [
      {
        name: 'Einmaliger Zugriff',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Kontinuierlicher Zugriff',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Speicherung von Daten',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Aggregation Anonymisierung',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Analyse',
        isSelected: false,
        id: Math.random()
      },
      {
        name: 'Mit Partnern teilen',
        isSelected: false,
        id: Math.random()
      },
    ],
    filterStatus: [
      {isVisible: false}
    ]
  }

  hideCard = (id) => {
    /*
    const cards = this.state.cards.filter(card => {
      return card.id !== id
    })
    this.setState({
      cards
    })
    */
  }

  openDetails = () => {
    console.log('hello')
  }

  onCategorySelected = (id) => {
    const categories = this.state.categories.map(category => {
      category.active = false
      if (category.id === id) {
        category.active ? (category.active = false) : (category.active = true)
      }
      return category
    })
    this.setState({
      categories,
    })
  }

  handleFilterClick = (newState) => {
    const filterStatus = this.state.filterStatus.map(filter => {
      filter.isVisible ? (filter.isVisible = false) : (filter.isVisible = true)
      return filter
    })

    const state = newState ? {
      ...clone(newState),
      filterStatus
    } : {
      filterStatus
    }
    
    this.setState(state)
  }




  render(){
    const filteredCards = filterCards(this.state.data, this.state.purpose, this.state.processing, this.state.categories, cards)

    return (
      <div className="App content">
        <div className="header" />
        <section className="categoriesScroll">
          <Categories categories={this.state.categories} isSelected={this.onCategorySelected}/>
        </section>
        <Cards cards={filteredCards} openDetails={this.openDetails}/>
        <div className="filterButton">
          <FilterButton handleFilterClick={this.handleFilterClick}/>
        </div>
        <Filter data={this.state.data} purpose={this.state.purpose} processing={this.state.processing} filterStatus={this.state.filterStatus} handleFilterClick={this.handleFilterClick} categories={this.state.categories}/>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
