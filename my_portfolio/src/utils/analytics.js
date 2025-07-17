// Analytics utility for tracking page views
export const AnalyticsUtils = {
  // Track a page view
  trackPageView: (page = 'landing') => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const timestamp = new Date().toISOString();
    
    // Get existing analytics data
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    
    // Initialize today's data if it doesn't exist
    if (!analyticsData.daily[today]) {
      analyticsData.daily[today] = {
        total: 0,
        pages: {},
        sessions: []
      };
    }
    
    // Increment total views for today
    analyticsData.daily[today].total += 1;
    
    // Increment page-specific views
    if (!analyticsData.daily[today].pages[page]) {
      analyticsData.daily[today].pages[page] = 0;
    }
    analyticsData.daily[today].pages[page] += 1;
    
    // Add session data
    analyticsData.daily[today].sessions.push({
      page,
      timestamp,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    });
    
    // Update total visits
    analyticsData.totalVisits += 1;
    
    // Save back to localStorage
    localStorage.setItem('portfolioAnalytics', JSON.stringify(analyticsData));
    
    return analyticsData;
  },

  // Get all analytics data
  getAnalyticsData: () => {
    const stored = localStorage.getItem('portfolioAnalytics');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Error parsing analytics data:', e);
      }
    }
    
    // Return default structure
    return {
      totalVisits: 0,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      daily: {}
    };
  },

  // Get views for a specific date range
  getViewsByDateRange: (startDate, endDate) => {
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    const views = [];
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateStr = date.toISOString().split('T')[0];
      const dayData = analyticsData.daily[dateStr];
      
      views.push({
        date: dateStr,
        total: dayData ? dayData.total : 0,
        pages: dayData ? dayData.pages : {},
        sessions: dayData ? dayData.sessions.length : 0
      });
    }
    
    return views;
  },

  // Get weekly aggregated data
  getWeeklyData: (weeksBack = 4) => {
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    const weeks = [];
    const today = new Date();
    
    for (let i = 0; i < weeksBack; i++) {
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - (i * 7) - today.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      let weekTotal = 0;
      const weekPages = {};
      
      for (let date = new Date(weekStart); date <= weekEnd; date.setDate(date.getDate() + 1)) {
        const dateStr = date.toISOString().split('T')[0];
        const dayData = analyticsData.daily[dateStr];
        
        if (dayData) {
          weekTotal += dayData.total;
          Object.keys(dayData.pages).forEach(page => {
            weekPages[page] = (weekPages[page] || 0) + dayData.pages[page];
          });
        }
      }
      
      weeks.unshift({
        week: `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`,
        weekStart: weekStart.toISOString().split('T')[0],
        weekEnd: weekEnd.toISOString().split('T')[0],
        total: weekTotal,
        pages: weekPages
      });
    }
    
    return weeks;
  },

  // Get monthly aggregated data
  getMonthlyData: (monthsBack = 6) => {
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    const months = [];
    const today = new Date();
    
    for (let i = 0; i < monthsBack; i++) {
      const monthDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
      
      let monthTotal = 0;
      const monthPages = {};
      
      for (let date = new Date(monthStart); date <= monthEnd; date.setDate(date.getDate() + 1)) {
        const dateStr = date.toISOString().split('T')[0];
        const dayData = analyticsData.daily[dateStr];
        
        if (dayData) {
          monthTotal += dayData.total;
          Object.keys(dayData.pages).forEach(page => {
            monthPages[page] = (monthPages[page] || 0) + dayData.pages[page];
          });
        }
      }
      
      months.unshift({
        month: monthDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
        monthStart: monthStart.toISOString().split('T')[0],
        monthEnd: monthEnd.toISOString().split('T')[0],
        total: monthTotal,
        pages: monthPages
      });
    }
    
    return months;
  },

  // Get top pages
  getTopPages: (days = 30) => {
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    const pageStats = {};
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    Object.keys(analyticsData.daily).forEach(dateStr => {
      const date = new Date(dateStr);
      if (date >= cutoffDate) {
        const dayData = analyticsData.daily[dateStr];
        Object.keys(dayData.pages).forEach(page => {
          pageStats[page] = (pageStats[page] || 0) + dayData.pages[page];
        });
      }
    });
    
    return Object.entries(pageStats)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views);
  },

  // Clear all analytics data
  clearAnalyticsData: () => {
    localStorage.removeItem('portfolioAnalytics');
  },

  // Export analytics data
  exportAnalyticsData: () => {
    const analyticsData = AnalyticsUtils.getAnalyticsData();
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `portfolio-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }
};
