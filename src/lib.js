export const clone = original => JSON.parse(JSON.stringify(original))

export const filterCards = (data, purpose, processing, categories, declinedOrAcceptedCards, cards) => {
    const activeCategory = categories.find(c => c.active)
    let filteredCards = activeCategory.name === "Alle Deals" ? cards : cards.filter(card => card.category === activeCategory.name)

    const activeFilters = [
      ...data,
      ...purpose,
      ...processing,
    ].filter(filter => filter.isSelected)

    filteredCards = filteredCards.filter(card => {
      if(activeFilters.length === 0) return true
      for(let filter of activeFilters) {
        if(card.filterProperties.includes(filter.name)) {
          return true;
        }
      }
      return false
    })
    
    filteredCards = filteredCards.filter(card => !declinedOrAcceptedCards.includes(card.id))

    return filteredCards
  }