// ==========================================
// KIDSAFE RIDE - MAIN JAVASCRIPT
// Updated with Kharghar & Belapur Routes
// ==========================================

// ==========================================
// DATA STRUCTURES - KHARGHAR & BELAPUR ROUTES
// ==========================================

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
        startTime: '7:20 AM',
        eta: '18 min',
        status: 'on-time',
        driver: { name: 'Manoj Verma', initials: 'MV', phone: '+91 98765 56789' },
        stops: [
            { name: 'CBD Belapur', time: '7:20 AM', completed: true },
            { name: 'Belapur Court', time: '7:28 AM', completed: false, current: true },
            { name: 'Sector 11 Belapur', time: '7:35 AM', completed: false },
            { name: 'Nerul Junction', time: '7:42 AM', completed: false },
            { name: 'School Campus Belapur', time: '7:50 AM', completed: false }
        ]
    },
    {
        id: 6,
        busNumber: 'KS-106',
        school: 'greenfield',
        schoolName: 'Greenfield International',
        routeName: 'Kharghar-Taloja Route',
        totalStops: 8,
        startTime: '6:40 AM',
        eta: '15 min',
        status: 'on-time',
        driver: { name: 'Arun Reddy', initials: 'AR', phone: '+91 98765 67890' },
        stops: [
            { name: 'Kharghar Node', time: '6:40 AM', completed: true },
            { name: 'Sector 35 Kharghar', time: '6:48 AM', completed: true },
            { name: 'Taloja Road', time: '6:55 AM', completed: false, current: true },
            { name: 'Kamothe Junction', time: '7:03 AM', completed: false },
            { name: 'New Panvel', time: '7:10 AM', completed: false },
            { name: 'Khanda Colony', time: '7:18 AM', completed: false },
            { name: 'Golf Course Circle', time: '7:25 AM', completed: false },
            { name: 'School Gate Kharghar', time: '7:33 AM', completed: false }
        ]
    }
];

// ==========================================
// ROUTES PAGE FUNCTIONALITY
// ==========================================

if (document.getElementById('routes-container')) {
    // Render route cards
    function renderRouteCards(filteredData = routesData) {
        const container = document.getElementById('routes-container');
        container.innerHTML = '';
        
        filteredData.forEach(route => {
            const card = document.createElement('div');
            card.className = 'route-card';
            card.innerHTML = `
                <div class="route-header">
                    <div class="route-number">${route.busNumber}</div>
                    <div class="route-status ${route.status}">
                        <span class="status-dot"></span>
                        ${route.status === 'on-time' ? 'On Time' : route.status === 'delayed' ? 'Delayed' : 'Arrived'}
                    </div>
                </div>
                <div class="route-school">${route.schoolName}</div>
                <div class="route-details">
                    <div class="route-detail">
                        <span class="detail-label">Route:</span>
                        <span class="detail-value">${route.routeName}</span>
                    </div>
                    <div class="route-detail">
                        <span class="detail-label">Total Stops:</span>
                        <span class="detail-value">${route.totalStops}</span>
                    </div>
                    <div class="route-detail">
                        <span class="detail-label">Start Time:</span>
                        <span class="detail-value">${route.startTime}</span>
                    </div>
                    <div class="route-detail">
                        <span class="detail-label">ETA:</span>
                        <span class="detail-value">${route.eta}</span>
                    </div>
                </div>
                <button class="route-action" onclick="window.location.href='tracking.html'">
                    Track This Bus
                </button>
            `;
            container.appendChild(card);
        });
    }

    // Render routes table
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
                <td><button class="table-action-btn" onclick="window.location.href='tracking.html'">Track</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Filter functionality
    function filterRoutes() {
        const schoolFilter = document.getElementById('school-select').value;
        const statusFilter = document.getElementById('status-filter').value;
        
        let filtered = routesData;
        
        if (schoolFilter !== 'all') {
            filtered = filtered.filter(route => route.school === schoolFilter);
        }
        
        if (statusFilter !== 'all') {
            filtered = filtered.filter(route => route.status === statusFilter);
        }
        
        renderRouteCards(filtered);
        renderRoutesTable(filtered);
    }

    // Event listeners for filters
    document.getElementById('school-select').addEventListener('change', filterRoutes);
    document.getElementById('status-filter').addEventListener('change', filterRoutes);

    // Initial render
    renderRouteCards();
    renderRoutesTable();
}

// ==========================================
// LIVE TRACKING PAGE FUNCTIONALITY
// ==========================================

if (document.getElementById('tracking-dashboard')) {
    let trackingInterval = null;
    let currentETA = 12;
    let currentProgress = 37;
    let notificationShown = false;
    
    const busSelect = document.getElementById('bus-select');
    const dashboard = document.getElementById('tracking-dashboard');
    const placeholder = document.getElementById('tracking-placeholder');

    // Start tracking simulation
    function startTracking(busNumber) {
        const route = routesData.find(r => r.busNumber === busNumber);
        if (!route) return;

        // Show dashboard, hide placeholder
        dashboard.style.display = 'block';
        placeholder.style.display = 'none';

        // Set initial data
        updateTrackingInfo(route);
        
        // Clear existing interval
        if (trackingInterval) {
            clearInterval(trackingInterval);
        }

        // Reset values
        currentETA = 12;
        currentProgress = 37;
        notificationShown = false;

        // Start live updates
        trackingInterval = setInterval(() => {
            updateLiveTracking(route);
        }, 3000); // Update every 3 seconds for demo
    }

    // Update tracking information
    function updateTrackingInfo(route) {
        // Update bus info
        document.getElementById('bus-number').textContent = `Bus ${route.busNumber}`;
        document.getElementById('school-name').textContent = route.schoolName;
        
        // Update status
        updateStatus(route.status);
        
        // Update driver info
        document.getElementById('driver-avatar').textContent = route.driver.initials;
        document.getElementById('driver-name').textContent = route.driver.name;
        document.getElementById('driver-contact').textContent = `📞 ${route.driver.phone}`;
        
        // Update stops list
        renderStopsList(route.stops);
        
        // Render map stops
        renderMapStops(route.stops);
    }

    // Update live tracking data
    function updateLiveTracking(route) {
        // Simulate ETA decrease
        if (currentETA > 0) {
            currentETA -= 1;
            
            // Update ETA display
            document.getElementById('eta-time').textContent = `${currentETA} minutes`;
            
            // Update progress
            currentProgress += 8;
            if (currentProgress > 100) currentProgress = 100;
            
            document.getElementById('progress-fill').style.width = `${currentProgress}%`;
            document.getElementById('progress-percent').textContent = `${currentProgress}%`;
            
            // Change status based on ETA
            if (currentETA <= 5 && !notificationShown) {
                updateStatus('approaching');
                showNotification('Bus arriving in 5 minutes! Please be ready at your stop.');
                notificationShown = true;
            }
            
            // Update current stop
            const currentStopIndex = Math.floor((100 - currentProgress) / 12.5);
            const totalStops = route.stops.length;
            const completedStops = totalStops - currentStopIndex;
            document.getElementById('current-stop').textContent = `Stop ${completedStops} of ${totalStops}`;
            
        } else {
            // Bus has arrived
            currentETA = 0;
            document.getElementById('eta-time').textContent = 'Arrived';
            updateStatus('arrived');
            showNotification('Bus has arrived at your stop!');
            clearInterval(trackingInterval);
        }
    }

    // Update status indicator
    function updateStatus(status) {
        const statusIndicator = document.querySelector('.bus-status-card');
        const statusText = document.getElementById('status-text');
        const statusDot = document.querySelector('.status-dot');
        
        // Remove all status classes
        statusIndicator.classList.remove('on-time', 'delayed', 'arrived', 'approaching');
        
        switch(status) {
            case 'on-time':
                statusIndicator.style.borderLeftColor = '#10b981';
                statusText.textContent = 'On Time';
                statusText.style.color = '#10b981';
                statusDot.style.background = '#10b981';
                break;
            case 'delayed':
                statusIndicator.style.borderLeftColor = '#f59e0b';
                statusText.textContent = 'Delayed';
                statusText.style.color = '#f59e0b';
                statusDot.style.background = '#f59e0b';
                break;
            case 'arrived':
                statusIndicator.style.borderLeftColor = '#3b82f6';
                statusText.textContent = 'Arrived';
                statusText.style.color = '#3b82f6';
                statusDot.style.background = '#3b82f6';
                break;
            case 'approaching':
                statusIndicator.style.borderLeftColor = '#f59e0b';
                statusText.textContent = 'Approaching';
                statusText.style.color = '#f59e0b';
                statusDot.style.background = '#f59e0b';
                break;
        }
    }

    // Render stops list
    function renderStopsList(stops) {
        const stopsList = document.getElementById('stops-list');
        stopsList.innerHTML = '';
        
        const upcomingStops = stops.filter(stop => !stop.completed).slice(0, 4);
        
        upcomingStops.forEach(stop => {
            const stopItem = document.createElement('div');
            stopItem.className = 'stop-item';
            stopItem.innerHTML = `
                <span class="stop-name">${stop.current ? '📍 ' : ''}${stop.name}</span>
                <span class="stop-time">${stop.time}</span>
            `;
            stopsList.appendChild(stopItem);
        });
    }

    // Render map stops
    function renderMapStops(stops) {
        const mapStops = document.getElementById('map-stops');
        mapStops.innerHTML = '';
        
        stops.forEach((stop, index) => {
            const marker = document.createElement('div');
            marker.className = `stop-marker ${stop.completed ? 'completed' : ''}`;
            marker.textContent = index + 1;
            
            // Position markers along the route (simulated positions)
            const positions = [
                { left: '10%', top: '80%' },
                { left: '20%', top: '70%' },
                { left: '30%', top: '60%' },
                { left: '40%', top: '50%' },
                { left: '50%', top: '40%' },
                { left: '60%', top: '30%' },
                { left: '70%', top: '20%' },
                { left: '80%', top: '15%' },
                { left: '90%', top: '10%' }
            ];
            
            if (positions[index]) {
                marker.style.left = positions[index].left;
                marker.style.top = positions[index].top;
            }
            
            mapStops.appendChild(marker);
        });
    }

    // Show notification toast
    function showNotification(message) {
        const toast = document.getElementById('notification-toast');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    // Event listener for bus selection
    busSelect.addEventListener('change', function() {
        const selectedBus = this.value;
        if (selectedBus) {
            startTracking(selectedBus);
        }
    });
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

if (document.getElementById('contact-form')) {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const userTypeSelect = document.getElementById('user-type');
    const subjectInput = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const userTypeError = document.getElementById('user-type-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Validation functions
    function validateName() {
        const value = nameInput.value.trim();
        if (value === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('error');
            return false;
        }
        if (value.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameInput.classList.add('error');
            return false;
        }
        nameError.textContent = '';
        nameInput.classList.remove('error');
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
            return false;
        }
        if (!emailRegex.test(value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
            return false;
        }
        emailError.textContent = '';
        emailInput.classList.remove('error');
        return true;
    }

    function validatePhone() {
        const value = phoneInput.value.trim();
        const phoneRegex = /^[\+]?[0-9]{10,15}$/;
        
        if (value === '') {
            phoneError.textContent = 'Phone number is required';
            phoneInput.classList.add('error');
            return false;
        }
        if (!phoneRegex.test(value.replace(/[\s\-]/g, ''))) {
            phoneError.textContent = 'Please enter a valid phone number';
            phoneInput.classList.add('error');
            return false;
        }
        phoneError.textContent = '';
        phoneInput.classList.remove('error');
        return true;
    }

    function validateUserType() {
        const value = userTypeSelect.value;
        if (value === '') {
            userTypeError.textContent = 'Please select your user type';
            userTypeSelect.classList.add('error');
            return false;
        }
        userTypeError.textContent = '';
        userTypeSelect.classList.remove('error');
        return true;
    }

    function validateSubject() {
        const value = subjectInput.value.trim();
        if (value === '') {
            subjectError.textContent = 'Subject is required';
            subjectInput.classList.add('error');
            return false;
        }
        if (value.length < 5) {
            subjectError.textContent = 'Subject must be at least 5 characters';
            subjectInput.classList.add('error');
            return false;
        }
        subjectError.textContent = '';
        subjectInput.classList.remove('error');
        return true;
    }

    function validateMessage() {
        const value = messageTextarea.value.trim();
        if (value === '') {
            messageError.textContent = 'Message is required';
            messageTextarea.classList.add('error');
            return false;
        }
        if (value.length < 20) {
            messageError.textContent = 'Message must be at least 20 characters';
            messageTextarea.classList.add('error');
            return false;
        }
        messageError.textContent = '';
        messageTextarea.classList.remove('error');
        return true;
    }

    // Add real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    userTypeSelect.addEventListener('change', validateUserType);
    subjectInput.addEventListener('blur', validateSubject);
    messageTextarea.addEventListener('blur', validateMessage);

    // Handle form submission
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isUserTypeValid = validateUserType();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        // Check if all validations passed
        if (isNameValid && isEmailValid && isPhoneValid && isUserTypeValid && isSubjectValid && isMessageValid) {
            // Disable button and show loading state
            submitBtn.disabled = true;
            document.getElementById('submit-text').style.display = 'none';
            document.getElementById('submit-loader').style.display = 'inline';
            
            // Simulate form submission
            setTimeout(() => {
                // Hide form, show success message
                form.style.display = 'none';
                document.getElementById('success-message').style.display = 'block';
                
                // Reset form
                nameInput.value = '';
                emailInput.value = '';
                phoneInput.value = '';
                userTypeSelect.value = '';
                subjectInput.value = '';
                messageTextarea.value = '';
                document.getElementById('newsletter').checked = false;
                
                // Re-enable button
                submitBtn.disabled = false;
                document.getElementById('submit-text').style.display = 'inline';
                document.getElementById('submit-loader').style.display = 'none';
            }, 2000);
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .pricing-card, .driver-card, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

console.log('KidSafe Ride initialized successfully! 🚌');
console.log('Serving Kharghar & Belapur areas');
