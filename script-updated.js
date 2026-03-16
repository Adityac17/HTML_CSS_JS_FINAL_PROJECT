const routesData = [
    {
        id: 1,
        busNumber: 'KS-101',
        school: 'sunrise',
        schoolName: 'Sunrise Public School',
        routeName: 'Kharghar-Belapur Route',
        totalStops: 8,
        startTime: '7:00 AM',
        eta: '12 min',
        status: 'on-time',
        driver: { name: 'Rajesh Sharma', initials: 'RS', phone: '+91 98765 12345' },
        stops: [
            { name: 'Kharghar Station', time: '7:00 AM', completed: true },
            { name: 'Sector 10 Kharghar', time: '7:08 AM', completed: true },
            { name: 'Utsav Chowk', time: '7:15 AM', completed: true },
            { name: 'Central Park', time: '7:22 AM', completed: false, current: true },
            { name: 'Owe Circle', time: '7:30 AM', completed: false },
            { name: 'Belapur Station', time: '7:38 AM', completed: false },
            { name: 'CBD Belapur', time: '7:45 AM', completed: false },
            { name: 'School Gate Belapur', time: '7:52 AM', completed: false }
        ]
    },
    {
        id: 2,
        busNumber: 'KS-102',
        school: 'greenfield',
        schoolName: 'Greenfield International',
        routeName: 'Kharghar Sector Route',
        totalStops: 6,
        startTime: '7:15 AM',
        eta: '8 min',
        status: 'on-time',
        driver: { name: 'Amit Patel', initials: 'AP', phone: '+91 98765 23456' },
        stops: [
            { name: 'Sector 5 Kharghar', time: '7:15 AM', completed: true },
            { name: 'Sector 7 Kharghar', time: '7:23 AM', completed: false, current: true },
            { name: 'Sector 9 Market', time: '7:30 AM', completed: false },
            { name: 'Sector 15 Circle', time: '7:38 AM', completed: false },
            { name: 'Golf Course Road', time: '7:45 AM', completed: false },
            { name: 'School Campus Kharghar', time: '7:52 AM', completed: false }
        ]
    },
    {
        id: 3,
        busNumber: 'KS-103',
        school: 'heritage',
        schoolName: 'Heritage Academy',
        routeName: 'Belapur-Kharghar Route',
        totalStops: 7,
        startTime: '6:45 AM',
        eta: '5 min',
        status: 'delayed',
        driver: { name: 'Suresh Kumar', initials: 'SK', phone: '+91 98765 34567' },
        stops: [
            { name: 'Belapur Village', time: '6:45 AM', completed: true },
            { name: 'Seawoods Station', time: '6:53 AM', completed: true },
            { name: 'Palm Beach Road', time: '7:00 AM', completed: true },
            { name: 'Kharghar Hills', time: '7:08 AM', completed: false, current: true },
            { name: 'Sector 20 Kharghar', time: '7:15 AM', completed: false },
            { name: 'Kharghar Plaza', time: '7:22 AM', completed: false },
            { name: 'School Entrance', time: '7:30 AM', completed: false }
        ]
    },
    {
        id: 4,
        busNumber: 'KS-104',
        school: 'modern',
        schoolName: 'Modern High School',
        routeName: 'Kharghar Express Route',
        totalStops: 9,
        startTime: '6:30 AM',
        eta: 'Arrived',
        status: 'arrived',
        driver: { name: 'Vikram Khanna', initials: 'VK', phone: '+91 98765 45678' },
        stops: [
            { name: 'Sector 1 Kharghar', time: '6:30 AM', completed: true },
            { name: 'Sector 3 Garden', time: '6:38 AM', completed: true },
            { name: 'Sector 8 Market', time: '6:45 AM', completed: true },
            { name: 'Sector 11 Circle', time: '6:53 AM', completed: true },
            { name: 'Sector 14 Square', time: '7:00 AM', completed: true },
            { name: 'Sector 19 Junction', time: '7:08 AM', completed: true },
            { name: 'Sector 21 Park', time: '7:15 AM', completed: true },
            { name: 'Pandavkada Falls Road', time: '7:22 AM', completed: true },
            { name: 'School Building Kharghar', time: '7:30 AM', completed: true }
        ]
    },
    {
        id: 5,
        busNumber: 'KS-105',
        school: 'sunrise',
        schoolName: 'Sunrise Public School',
        routeName: 'Belapur Circle Route',
        totalStops: 5,
        startTime: '7:30 AM',
        eta: '15 min',
        status: 'on-time',
        driver: { name: 'Priya Mehta', initials: 'PM', phone: '+91 98765 56789' },
        stops: [
            { name: 'CBD Belapur', time: '7:30 AM', completed: true },
            { name: 'Belapur Court', time: '7:38 AM', completed: false, current: true },
            { name: 'Sector 11 Belapur', time: '7:45 AM', completed: false },
            { name: 'Nerul Junction', time: '7:52 AM', completed: false },
            { name: 'School Campus Belapur', time: '8:00 AM', completed: false }
        ]
    },
    {
        id: 6,
        busNumber: 'KS-106',
        school: 'heritage',
        schoolName: 'Heritage Academy',
        routeName: 'Kharghar-Taloja Route',
        totalStops: 8,
        startTime: '6:50 AM',
        eta: '18 min',
        status: 'on-time',
        driver: { name: 'Manoj Singh', initials: 'MS', phone: '+91 98765 67890' },
        stops: [
            { name: 'Kharghar Node', time: '6:50 AM', completed: true },
            { name: 'Sector 35 Kharghar', time: '6:58 AM', completed: true },
            { name: 'Taloja Road', time: '7:05 AM', completed: false, current: true },
            { name: 'Kamothe Junction', time: '7:13 AM', completed: false },
            { name: 'New Panvel', time: '7:20 AM', completed: false },
            { name: 'Khanda Colony', time: '7:28 AM', completed: false },
            { name: 'Golf Course Circle', time: '7:35 AM', completed: false },
            { name: 'School Gate Kharghar', time: '7:43 AM', completed: false }
        ]
    }
];

// ROUTES PAGE FUNCTIONALITY

if (document.getElementById('routes-container')) {
    const schoolFilter = document.getElementById('school-select');
    const statusFilter = document.getElementById('status-filter');

    function renderRouteCards(filteredData = routesData) {
        const container = document.getElementById('routes-container');
        container.innerHTML = '';
        
        filteredData.forEach(route => {
            const card = document.createElement('div');
            card.className = 'route-card';
            card.innerHTML = `
                <div class="route-header">
                    <div class="route-number">${route.busNumber}</div>
                    <span class="route-badge ${route.status}">
                        ${route.status === 'on-time' ? 'On Time' : route.status === 'delayed' ? 'Delayed' : 'Arrived'}
                    </span>
                </div>
                <h3 class="route-title">${route.routeName}</h3>
                <p class="route-school">${route.schoolName}</p>
                <div class="route-details">
                    <div class="route-detail">
                        <span class="detail-label">Stops:</span>
                        <span class="detail-value">${route.totalStops}</span>
                    </div>
                    <div class="route-detail">
                        <span class="detail-label">Departs:</span>
                        <span class="detail-value">${route.startTime}</span>
                    </div>
                    <div class="route-detail">
                        <span class="detail-label">ETA:</span>
                        <span class="detail-value">${route.eta}</span>
                    </div>
                </div>
                <button class="route-action" onclick="window.location.href='tracking-updated.html'">
                    Track This Bus
                </button>
            `;
            container.appendChild(card);
        });
    }

    function renderRoutesTable(filteredData = routesData) {
        const tbody = document.getElementById('routes-table-body');
        tbody.innerHTML = '';
        
        filteredData.forEach(route => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${route.busNumber}</strong></td>
                <td>${route.schoolName}</td>
                <td>${route.routeName}</td>
                <td>${route.totalStops}</td>
                <td>${route.startTime}</td>
                <td>${route.eta}</td>
                <td><span class="table-status ${route.status}">
                    ${route.status === 'on-time' ? 'On Time' : route.status === 'delayed' ? 'Delayed' : 'Arrived'}
                </span></td>
                <td><button class="table-action-btn" onclick="window.location.href='tracking-updated.html'">Track</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    function filterRoutes() {
        const schoolValue = schoolFilter.value;
        const statusValue = statusFilter.value;
        
        const filtered = routesData.filter(route => {
            const schoolMatch = schoolValue === 'all' || route.school === schoolValue;
            const statusMatch = statusValue === 'all' || route.status === statusValue;
            return schoolMatch && statusMatch;
        });
        
        renderRouteCards(filtered);
        renderRoutesTable(filtered);
    }

    schoolFilter.addEventListener('change', filterRoutes);
    statusFilter.addEventListener('change', filterRoutes);

    renderRouteCards();
    renderRoutesTable();
}

// TRACKING PAGE FUNCTIONALITY

if (document.getElementById('bus-select')) {
    const busSelect = document.getElementById('bus-select');
    const dashboard = document.getElementById('tracking-dashboard');
    const placeholder = document.getElementById('tracking-placeholder');
    
    let currentRoute = null;
    let updateInterval = null;

    busSelect.addEventListener('change', function() {
        const busNumber = this.value;
        if (busNumber) {
            startTracking(busNumber);
        } else {
            stopTracking();
        }
    });

    function startTracking(busNumber) {
        currentRoute = routesData.find(route => route.busNumber === busNumber);
        
        if (currentRoute) {
            placeholder.style.display = 'none';
            dashboard.style.display = 'block';
            
            updateTrackingInfo(currentRoute);
            
            if (updateInterval) clearInterval(updateInterval);
            updateInterval = setInterval(() => {
                updateLiveTracking();
            }, 3000);
        }
    }

    function stopTracking() {
        if (updateInterval) clearInterval(updateInterval);
        dashboard.style.display = 'none';
        placeholder.style.display = 'flex';
    }

    function updateTrackingInfo(route) {
        document.getElementById('bus-number').textContent = `Bus ${route.busNumber}`;
        document.getElementById('school-name').textContent = route.schoolName;
        document.getElementById('driver-name').textContent = route.driver.name;
        document.getElementById('driver-avatar').textContent = route.driver.initials;
        document.getElementById('driver-contact').textContent = `📞 ${route.driver.phone}`;
        
        const completedStops = route.stops.filter(s => s.completed).length;
        const progressPercent = Math.round((completedStops / route.totalStops) * 100);
        
        document.getElementById('progress-fill').style.width = `${progressPercent}%`;
        document.getElementById('current-stop').textContent = `Stop ${completedStops} of ${route.totalStops}`;
        document.getElementById('progress-percent').textContent = `${progressPercent}%`;
        
        updateStatus(route.status);
        renderStopsList(route.stops);
        renderMapStops(route.stops);
        
        const currentStop = route.stops.find(s => s.current);
        if (currentStop) {
            document.getElementById('eta-time').textContent = route.eta;
            document.getElementById('eta-detail').textContent = `at ${currentStop.name}`;
        }
    }

    function updateLiveTracking() {
        if (!currentRoute) return;
        
        const etaElement = document.getElementById('eta-time');
        const currentETA = etaElement.textContent;
        
        if (currentETA !== 'Arrived' && !isNaN(parseInt(currentETA))) {
            let minutes = parseInt(currentETA);
            minutes = Math.max(0, minutes - 1);
            etaElement.textContent = minutes === 0 ? 'Arriving' : `${minutes} minutes`;
            
            if (minutes === 5) {
                showNotification('Bus approaching! Estimated arrival in 5 minutes.');
            }
            
            if (minutes === 0) {
                setTimeout(() => {
                    etaElement.textContent = 'Arrived';
                    updateStatus('arrived');
                }, 3000);
            }
        }
    }

    function updateStatus(status) {
        const statusIndicator = document.getElementById('status-indicator');
        const statusText = document.getElementById('status-text');
        
        statusIndicator.className = 'status-indicator ' + status;
        statusText.textContent = status === 'on-time' ? 'On Time' : 
                                status === 'delayed' ? 'Delayed' : 
                                status === 'arrived' ? 'Arrived' : 'Approaching';
    }

    function renderStopsList(stops) {
        const stopsList = document.getElementById('stops-list');
        stopsList.innerHTML = '';
        
        const upcomingStops = stops.filter((s, index) => !s.completed || s.current);
        const displayStops = upcomingStops.slice(0, 4);
        
        displayStops.forEach(stop => {
            const stopItem = document.createElement('div');
            stopItem.className = `stop-item ${stop.current ? 'current' : ''} ${stop.completed ? 'completed' : ''}`;
            stopItem.innerHTML = `
                <div class="stop-marker"></div>
                <div class="stop-info">
                    <div class="stop-name">${stop.name}</div>
                    <div class="stop-time">${stop.time}</div>
                </div>
            `;
            stopsList.appendChild(stopItem);
        });
    }

    function renderMapStops(stops) {
        const mapStops = document.getElementById('map-stops');
        mapStops.innerHTML = '';
        
        const positions = [
            { left: '15%', top: '20%' },
            { left: '25%', top: '35%' },
            { left: '35%', top: '25%' },
            { left: '50%', top: '40%' },
            { left: '60%', top: '30%' },
            { left: '70%', top: '45%' },
            { left: '75%', top: '60%' },
            { left: '85%', top: '70%' }
        ];
        
        stops.forEach((stop, index) => {
            if (index < positions.length) {
                const marker = document.createElement('div');
                marker.className = `map-stop ${stop.completed ? 'completed' : ''} ${stop.current ? 'current' : ''}`;
                marker.style.left = positions[index].left;
                marker.style.top = positions[index].top;
                marker.innerHTML = `<span>${index + 1}</span>`;
                mapStops.appendChild(marker);
            }
        });
    }

    function showNotification(message) {
        const toast = document.getElementById('notification-toast');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }
}

// CONTACT FORM VALIDATION

if (document.getElementById('contact-form')) {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');

    function validateName(name) {
        return name.trim().length >= 3;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone.replace(/\s/g, ''));
    }

    function validateField(fieldId, validatorFn, errorMsg) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        if (!validatorFn(field.value)) {
            errorElement.textContent = errorMsg;
            field.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            field.classList.remove('error');
            return true;
        }
    }

    document.getElementById('name').addEventListener('blur', function() {
        validateField('name', validateName, 'Name must be at least 3 characters');
    });

    document.getElementById('email').addEventListener('blur', function() {
        validateField('email', validateEmail, 'Please enter a valid email address');
    });

    document.getElementById('phone').addEventListener('blur', function() {
        validateField('phone', validatePhone, 'Please enter a valid phone number');
    });

    document.getElementById('user-type').addEventListener('blur', function() {
        validateField('user-type', (val) => val !== '', 'Please select an option');
    });

    document.getElementById('subject').addEventListener('blur', function() {
        validateField('subject', (val) => val.trim().length >= 5, 'Subject must be at least 5 characters');
    });

    document.getElementById('message').addEventListener('blur', function() {
        validateField('message', (val) => val.trim().length >= 10, 'Message must be at least 10 characters');
    });

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const nameValid = validateField('name', validateName, 'Name must be at least 3 characters');
        const emailValid = validateField('email', validateEmail, 'Please enter a valid email address');
        const phoneValid = validateField('phone', validatePhone, 'Please enter a valid phone number');
        const userTypeValid = validateField('user-type', (val) => val !== '', 'Please select an option');
        const subjectValid = validateField('subject', (val) => val.trim().length >= 5, 'Subject must be at least 5 characters');
        const messageValid = validateField('message', (val) => val.trim().length >= 10, 'Message must be at least 10 characters');
        
        if (nameValid && emailValid && phoneValid && userTypeValid && subjectValid && messageValid) {
            document.getElementById('submit-text').style.display = 'none';
            document.getElementById('submit-loader').style.display = 'inline';
            
            setTimeout(() => {
                form.style.display = 'none';
                successMessage.style.display = 'block';
            }, 2000);
        }
    });
}

// SCROLL ANIMATIONS

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.route-card, .feature-card, .pricing-card, .driver-card, .faq-item');
    fadeElements.forEach(el => observer.observe(el));
});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
