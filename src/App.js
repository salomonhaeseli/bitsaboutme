import React, { Component } from 'react';
import Cards from './components/Cards'
import CardDetail from './components/CardDetail'
import Categories from './components/Categories'
import FilterButton from './components/FilterButton'
import Filter from './components/Filter'
import ConfirmationModal from './components/ConfirmationModal'
import EndScsreen from './components/EndScreen'

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
    ],
    detailStatus: [
      {isVisible: false}
    ],
    confirmationStatus: [
      {isVisible: false}
    ],
    endScreenStatus: [
      {isVisible: false}
    ],
    declinedOrAcceptedCards: [

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

  openDetails = (id) => {
    const detailStatus = this.state.detailStatus.map(status => {
      status.isVisible = true
      status.cardId = id
      return status
    })

    this.setState({
      detailStatus
    })
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

  handleDealAcceptClick = (id) => {
    const confirmationStatus = this.state.confirmationStatus.map(status => {
      status.isVisible = true
      status.cardId = id
      return status
    })

    this.setState({
      confirmationStatus
    })
  }

  handleAcceptConfirmClick = (id) => {
    const detailStatus = this.state.detailStatus.map(status => {
      status.isVisible = false
      return status
    })
    const confirmationStatus = this.state.confirmationStatus.map(status => {
      status.isVisible = false
      return status
    })
    const endScreenStatus = this.state.endScreenStatus.map(status => {
      status.isVisible = true
      status.cardId = id
      return status
    })

    this.setState({
      detailStatus,
      confirmationStatus,
      endScreenStatus,
      declinedOrAcceptedCards: [...this.state.declinedOrAcceptedCards, id]
    })
    
  }

  handleDealDeclineClick = (id) => {
    const detailStatus = this.state.detailStatus.map(status => {
      status.isVisible = false
      return status
    })

    this.setState({
      detailStatus,
      declinedOrAcceptedCards: [...this.state.declinedOrAcceptedCards, id]
    })
  }

  handleCloseClick = () => {
    const detailStatus = this.state.detailStatus.map(status => {
      status.isVisible = false
      return status
    })

    this.setState({
      detailStatus
    })
  }

  handleCloseClickModal = () => {
    const confirmationStatus = this.state.detailStatus.map(status => {
      status.isVisible = false
      return status
    })

    this.setState({
      confirmationStatus
    })
  }

  handleCloseClickEndScreen = () => {
    const endScreenStatus = this.state.detailStatus.map(status => {
      status.isVisible = false
      return status
    })

    this.setState({
      endScreenStatus
    })
  }

  
  render(){
    const filteredCards = filterCards(this.state.data, this.state.purpose, this.state.processing, this.state.categories, this.state.declinedOrAcceptedCards,cards)

    const detailsCardId = this.state.detailStatus[0].cardId
    const detailsCard = detailsCardId ? cards.find(card => card.id === detailsCardId) : cards[0]

    const confirmationdetailsCardId = this.state.confirmationStatus[0].cardId
    const confirmationdetailsCard = confirmationdetailsCardId ? cards.find(card => card.id === confirmationdetailsCardId) : cards[0]

    const endScreenCardId = this.state.endScreenStatus[0].cardId
    const endScreenCard = endScreenCardId ? cards.find(card => card.id === detailsCardId) : cards[0]
    const endScreenCardCategory = this.state.categories.find(category => category.name === endScreenCard.category)
    
    const recommendedCards = filterCards(this.state.data, this.state.purpose, this.state.processing, [{...endScreenCardCategory, active: true}], this.state.declinedOrAcceptedCards,cards)

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
        <Filter data={this.state.data} purpose={this.state.purpose} processing={this.state.processing} filterStatus={this.state.filterStatus} handleFilterClick={this.handleFilterClick} categories={this.state.categories} declinedOrAcceptedCards={this.state.declinedOrAcceptedCards}/>
        <CardDetail card={detailsCard} detailStatus={this.state.detailStatus} handleCloseClick={this.handleCloseClick} handleDealAcceptClick={this.handleDealAcceptClick} handleDealDeclineClick={this.handleDealDeclineClick}/>
        <ConfirmationModal card={confirmationdetailsCard} confirmationStatus={this.state.confirmationStatus} handleAcceptConfirmClick={this.handleAcceptConfirmClick} handleCloseClickModal={this.handleCloseClickModal}/>
        <EndScsreen card={endScreenCard} sameDataCards={recommendedCards} endScreenStatus={this.state.endScreenStatus} handleCloseClickEndScreen={this.handleCloseClickEndScreen}/>
        <div className="footer" />
      </div>
    );
  }
}

export default App;