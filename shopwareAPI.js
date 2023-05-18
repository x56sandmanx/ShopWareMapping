const axios = require('axios');
const PARTNER = "e85dd677-3632-4ecf-bd6a-aa3a8b61c340"
const SECRET = "gsK1d-XXrQGNHs53j0LyNhucALhrzQVnTpYOLzF5BAg"
const ax = axios.create({
  headers: {
    'Accept': "*/*",
    'X-Api-Partner-Id': PARTNER,
    'X-Api-Secret': SECRET
  }
})

const rateLimit = require('axios-rate-limit')
const api = rateLimit(ax, { maxRequests: 7, perMilliseconds: 1000, maxRPS: 7 })

const processObj = async (obj, name, shopId, tenantId) => {
  var tmp = getObjectFields(obj, name, shopId, tenantId)
}

const getCannedJobsFields = async (obj, shopId) => {
  var keys = []
  var values = []

  
  const processLaborsArray = (tableName, array, prefix, id) => {
    var index = 0
    var sql = ''
    for(const value of array){
      var loop_name = tableName
      if(typeof (value) === 'object'){
        var tmp = getLaborsArrayObjectFields(value, tableName, prefix + '.val')
        console.log("labor array Fields")
        console.log(tmp)
        //SQL CODE HERE
      }
      index++
    }
  }

  const getLaborsArrayObjectFields = (obj, name, prefix) => {
    var keys = []
    var values = []
    for(var [key, value] of Object.entries(obj)) {
      if(value != null){
        if(key === "name"){
          key = prefix + '.' + key
          keys.push(key)
          values.push(value)
        }
        else if(key === "hours"){
          key = prefix + '.' + "hours"
          keys.push(key)
          values.push(value)
        }
      }
    }
    return [keys, values]
  }

  const processPartsArray = (tableName, array, prefix, id) => {
    var index = 0
    var sql = ''
    for(const value of array){
      var loop_name = tableName
      if(typeof (value) === 'object'){
        var tmp = getLaborsArrayObjectFields(value, tableName, prefix + '.val')
        console.log("parst array Fields")
        console.log(tmp)
        //SQL CODE HERE
      }
      index++
    }
  }

  const getPartsArrayObjectFields = (obj, name, prefix) => {
    var keys = []
    var values = []
    for(var [key, value] of Object.entries(obj)) {
      if(value != null){
        if(key === "id"){
          key = prefix + '.' + key
          keys.push(key)
          values.push(value)
        }
        else if(key === "part_inventory_id"){
          key = prefix + '.' + "partType."+ "id"
          keys.push(key)
          values.push(value)
        }
        else if(key === "quantity"){
          key = prefix + '.' + key
          keys.push(key)
          values.push(value)
        }
      }
    }
    return [keys, values]
  }

  
  for(var[key,value] of Object.entries(obj)){
    if(key === "id"){
      keys.push(key)
      values.push(value)
    }
    else if(key === "created_at"){
      keys.push("createdDate")
      values.push(value)
    }
    else if(key === "updated_at"){
      keys.push("updatedDate")
      values.push(value)
    }
    else if(key === "title"){
      keys.push("name")
      values.push(value)
    }
    if(Array.isArray(value) && key === "labors"){
      if(value.length > 0){
        key = "labor"
        processLaborsArray(tableName + "_" + key, value, key, obj.id)
      } 
    }
    if(Array.isArray(value) && key === "parts"){
      if(value.length > 0){
        key = "parts"
        processLaborsArray(tableName + "_" + key, value, key, obj.id)
      } 
    }
  }
}

const getAppointmentFields = async (obj) => {
  var keys = []
  var values = []
  for(var [key, value] of Object.entries(obj)){
    if(value != null){
      if(key === "id"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "shop_id"){
        keys.push("shopId")
        values.push(value)
      }
      else if(key === "start_at"){
        keys.push("startTime")
        values.push(value)
      }
      else if(key === "end_at"){
        keys.push("endTime")
        values.push(value)
      }
      else if(key === "description"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "title"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "created_at"){
        keys.push("createdDate")
        values.push(value)
      }
      else if(key === "updated_at"){
        keys.push("updatedDate")
        values.push(value)
      }
    }
  }
  return [keys, values]
}


const getVehicleFields = (obj, shopId) => {
  var keys = []
  var values = []

  for(var [key, value] of Object.entries(obj)){
    if(value != null){
      if(key ==="id"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "created_at"){
        keys.push("createdDate")
        values.push(value)
      }
      else if(key === "updated_at"){
        keys.push("updatedDate")
        values.push(value)
      }
      else if(key === "plate"){
        keys.push("licensePlate")
        values.push(value)
      }
      else if(key=== "detail"){
        keys.push("notes")
        values.push(value)
      }
      else if(key === "fleet_number"){
        keys.push("unitNumber")
        values.push(value)
      }
      else if(key === "vin"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "year"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "make"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "model"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "engine"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "color"){
        keys.push(key)
        values.push(value)
      }
      else if (key === "production_date"){
        keys.push("productionDate")
        values.push(value)
      }
      else if (key === "customer_ids"){
        console.log("ids")
        var customerIds = obj.customer_ids
        for(const customerId of customerIds){
          console.log(customerId)
        }
        keys.push("customerId")
        values.push(value)
      }
      
  }
}
  return [keys, values]
}
const getShopFields = (obj, shopId) => {
  var keys = []
  var values = []

  for(var [key, value] of Object.entries(obj)){
    if(value != null)
    {
      if(key === "id"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "name"){
        keys.push(key)
        values.push(value)
      }
      else if(key === "address"){
        keys.push("address.address1")
        values.push(value)
      }
      else if(key === "phone"){
        keys.push("phone")
        values.push(value)
      }
      else if(key === "service_desk_email"){
        keys.push("email")
        values.push(value)
      }
      /*else if(key === "time_zone"){
        keys.push("timeZoneId")
        values.push(value)
      }
      */ 
    }
  }
  
  
}

const getCustomerFields = (obj, tableName, shopId) => {
  var keys = []
  var values = []

  const processPhoneArray = (tableName, array, prefix, id) => {
    var index = 0
    var sql = ''
    for(const value of array){
      var loop_name = tableName
      if(typeof (value) === 'object'){
        var tmp = getPhoneArrayObjectFields(value, tableName, prefix + '.val')
        console.log("Customer Phone Fields")
        console.log(tmp)
        //SQL CODE HERE
      }
      index++
    }
  }

  const getPhoneArrayObjectFields = (obj, name, prefix) => {
    var keys = []
    var values = []
    for(var [key, value] of Object.entries(obj)) {
      if(value != null){
        if(key === "number"){
          key = prefix + '.' + key
          keys.push(key)
          values.push(value)
        }
        else if(key === "preferred"){
          key = prefix + '.' + "primary"
          keys.push(key)
          values.push(value)
        }
      }
    }
    return [keys, values]
  }

  //calculations we can do in code
  const fullAddress = obj.address+", "+obj.city+", "+obj.state +" "+obj.zip
  keys.push("address.streetAddress")
  values.push(obj.address)
  keys.push("address.fullAddress")
  values.push(fullAddress)

  for(var [key, value] of Object.entries(obj)){
    if(value != null){
      if(Array.isArray(value) && key === "phones"){
        if(value.length > 0){
          key = "phone"
          processPhoneArray(tableName + "_" + key, value, key, obj.id)
        } 
      } else {
        if(key === "id"){
          keys.push(key)
          values.push(value)
        }
        else if(key === "email"){
          keys.push(key)
          values.push(value)
        }
        else if(key === "first_name"){
          key = "firstName"
          keys.push(key)
          values.push(value)
        }
        else if(key === "last_name"){
          key = "lastName"
          keys.push(key)
          values.push(value)
        }
        else if(key === "updated_at"){
          key = "updatedDate"
          keys.push(key)
          values.push(value)
        }
        else if(key === "created_at"){
          key = "createdDate"
          keys.push(key)
          values.push(value)
        }
        else if(key === "address"){
          key = "address.address1"
          keys.push(key)
          values.push(value)
        }
        else if(key === "state"){
          key = "address.state"
          keys.push(key)
          values.push(value)
        }
        else if(key === "city"){
          key = "address.city"  
          keys.push(key)
          values.push(value)
        }
        else if(key === "zip"){
          key = "address.zip"
          keys.push(key)
          values.push(value)
        }
        else if(key === "marketing_ok"){
          key = "okForMarketing"
          keys.push(key)
          values.push(value)
        }
        else if(key === "origin_shop_id"){
          value = shopId
          keys.push("shopId")
          values.push(value)
        }
        else if(key === "customer_type"){
          key = "customerType.name"
          keys.push(key)
          values.push(value)
          keys.push("customerType.code")
          values.push(value.toUpperCase())
        }
        else if(key === "detail"){
          key = "notes"
          keys.push(key)
          values.push(value)
        }
      }
    }
  }
  return [keys, values]
}

const getRepairOrderFields = async (obj, tableName) => {
  var keys = []
  var values = []
  const services = obj.services
  const payments = obj.payments

  const getJobArrayObjectFields = (obj, tableName, prefix, originalObj) => {
    var keys = []
    var values = []
    const labors = obj.labors

    const getSubletsArrayObjectFields = (obj, tableName, prefix) => {
      var keys = []
      var values = []
      
      for(var [key, value] of Object.entries(obj)){
        if(value != null){
          if(key === "id"){
            keys.push(prefix+'.'+key)
            values.push(value)
          }
         else if(key === "name"){
            keys.push(prefix+'.'+key)
            values.push(value)
          }
         else if(key === "provider"){
            keys.push(prefix+'.'+"vendor.name")
            values.push(value)
          }
         else if(key === "description"){
            keys.push(prefix+'.'+"note")
            values.push(value)
          }
          else if(key === "vendor_id"){
            keys.push(prefix+'.'+"vendor.id")
            values.push(value)
          }
          else if(key === "invoice_date"){
            keys.push(prefix+'.'+"authorizedDate")
            values.push(value)
          }
        }
      }
      return [keys, values]
    }

    const processSubletsArray = (tableName, array, prefix, id) => {
      var index = 0
      var sql = ''
      for(const value of array){
        var loop_name = tableName
        if(typeof (value) === 'object'){
          var tmp = getSubletsArrayObjectFields(value, tableName, prefix + '.val')
          //SQL CODE GOES HERE
        }
      }
      index++
    }

    const getJobLaborArrayObjectFields = (obj, tableName, prefix, jobObj) => {
      var keys = []
      var values = []

      keys.push(prefix+'.rate')
      values.push(jobObj.labor_rate_cents)

      for(var [key, value] of Object.entries(obj)){
        if(value != null){
          if(key === "id"){
            keys.push(prefix+'.id')
            values.push(value)
          }
          else if(key === "name"){
            keys.push(prefix+'.name')
            values.push(value)
          }
          else if(key === "hours"){
            keys.push(prefix+'.hours')
            values.push(value)
          }
        }
      }
      return [keys, values]
    }

    const getJobPartArrayObjectFields = (obj, tableName, prefix) => {
      var keys = []
      var values = []

      for(var[key, value] of Object.entries(obj)){
        if(value != null){
          if(key === "id"){
            keys.push(prefix+'.id')
            values.push(value)
          }
          else if(key === "brand"){
            keys.push(prefix+'.brand')
            values.push(value)
          }
          else if(key === "number"){
            keys.push(prefix+'.partNumber')
            values.push(value)
          }
          else if(key === "description"){
            keys.push(prefix+'.description')
            values.push(value)
          }
          else if(key === "quoted_price_cents"){
            keys.push(prefix+'.cost')
            values.push(value)
          }
          else if(key === "cost_cents"){
            keys.push(prefix+'.retail')
            values.push(value)
          }
          else if(key === "quantity"){
            keys.push(prefix+'.quantity')
            values.push(value)
          }
        }
      }
      return [keys, values]
    }

    const processJobLaborArray = (tableName, array, prefix, id, jobObj) => {
      var index = 0
      var sql = ''
      for(const value of array){
        var loop_name = tableName
        if(typeof (value) === 'object'){
          var tmp = getJobLaborArrayObjectFields(value, tableName, prefix + '.val', jobObj)
          //SQL CODE GOES HERE
        }
        index++
      }
    }
  
    const processJobPartArray = (tableName, array, prefix, id) => {
      var index = 0
      var sql = ''
      for(const value of array){
        var loop_name = tableName
        if(typeof (value) === 'object'){
          var tmp = getJobPartArrayObjectFields(value, tableName, prefix + '.val')
          //SQL CODE GOES HERE
        }
        index++
      }
    }

    const getLaborHours = (labors) => {
      var laborHours = 0
      labors.forEach(labor => {
        laborHours += labor.hours
      })
      keys.push(prefix+'.laborHours')
      values.push(laborHours)
    }

    const calculateTotal = (service) => {
      const laborRate = service.labor_rate_cents
      const labors = service.labors, parts = service.parts
      var partsTotal = 0, laborTotal = 0

      labors.forEach(labor => {
        laborTotal += laborRate*labor.hours
      })
      keys.push(prefix+'.laborTotal')
      values.push(laborTotal)

      parts.forEach(part => {
        partsTotal += part.quantity_needed * part.quoted_price_cents
      })
      keys.push(prefix+'.partsTotal')
      values.push(partsTotal)

    }

    //Pushing some values that stay the same from the original repair order
    keys.push(prefix+'.repairOrderId')
    values.push(originalObj.vehicle_id)
    keys.push(prefix+'.vehicleId')
    values.push(originalObj.vehicle_id)
    keys.push(prefix+'.customerId')
    values.push(originalObj.customer_id)
    keys.push(prefix+'.technicianId')
    values.push(originalObj.technician_id)

    //get total labor hours for job
    getLaborHours(labors)
    //calculate totals for job
    calculateTotal(obj)

    //Using originalObj to add some data points that are the same
    
    for(var [key, value] of Object.entries(obj)){
      if(value != null){
        if(Array.isArray(value) && key === "labors"){
          if(value.length > 0){
            processJobLaborArray(tableName + "_labor", value, prefix+".labor", obj.id, obj)
          }
        }
        else if(Array.isArray(value) && key === "parts"){
          if(value.length > 0){
            processJobPartArray(tableName + '_parts', value, prefix+".parts", obj.id)
          }
        }
        else if(Array.isArray(value) && key === "sublets"){
          if(value.length > 0){
            processSubletsArray("repair_orders_sublets", value, "sublets", obj.id)
          }
        }
        if(key === "id"){
          keys.push(prefix+'.'+key)
          values.push(value)
        }
        else if(key === "title"){
          keys.push(prefix+'.name')
          values.push(value)
        }
        else if(key === "created_at"){
          keys.push(prefix+'.createdDate')
          values.push(value)
        }
        else if(key === "updated_at"){
          keys.push(prefix+'.updatedDate')
          values.push(value)
        }
        else if(key === "completed_at"){
          keys.push(prefix+'.createdDate')
          values.push(value)
        }
        else if(key === "canned_job_id"){
          keys.push(prefix+'.cannedJobId')
          values.push(value)
        }
      }
    }
    return [keys, values]
  }

  const processJobArray = (tableName, array, prefix, id, originalObj) => {
    var index = 0
    var sql = ''
    for(const value of array){
      var loop_name = tableName
      if(typeof (value) === 'object'){
        var tmp = getJobArrayObjectFields(value, tableName, prefix + '.val', originalObj)
        //SQL CODE GOES HERE
      }
      index++
    }
  }

  const calculateSales = (services, obj) => {
    var laborSales = 0, partsSales = 0, subletSales = 0, 
        discountTotal = 0, feeTotal = 0, totalSales = 0,
        laborTaxRateDecimal = 0, partTaxRateDecimal = 0, subletTaxRateDecimal = 0, totalTaxes = 0
    if(obj.part_tax_rate != null)
      partTaxRateDecimal = obj.part_tax_rate/100
    if(obj.labor_tax_rate != null)
      laborTaxRateDecimal = obj.labor_tax_rate/100
    if(obj.sublet_tax_rate != null)
      subletTaxRateDecimal = obj.sublet_tax_rate/100

    services.forEach(service => {
      const laborRate = service.labor_rate_cents, labors = service.labors, parts = service.parts, sublets = service.sublets, hazmats = service.hazmats

      //First, grab discountTotal
      if(obj.part_discount_cents != null)
        discountTotal += obj.part_discount_cents
      if(obj.labor_discount_cents != null)
        discountTotal += obj.labor_discount_cents
      
      keys.push("discountTotal")
      values.push(discountTotal)

      //Now grab feeTotal
      if(obj.supply_fee_cents != null)
        feeTotal += obj.supply_fee_cents
      hazmats.forEach(hazmat => {
        if(hazmat.fee_cents != null)
          feeTotal += hazmat.fee_cents
      })

      keys.push("feeTotal")
      values.push(feeTotal)
      
      //Now get each sales, and then add everything together to get totalSales
      labors.forEach(labor => {
        if(labor.taxable === true){
          const laborS = labor.hours * laborRate
          const laborT = laborS * laborTaxRateDecimal
          totalTaxes += laborT
          laborSales += laborS + laborT
        }
        else
          laborSales += labor.hours * laborRate
      })
      keys.push("laborSales")
      values.push(laborSales)

      parts.forEach(part => {
        if(part.taxable === true){
          const partS = part.quantity_needed * part.quoted_price_cents
          const partT = partS * partTaxRateDecimal
          totalTaxes += partT
          partsSales += partS + partT
        }
        else
          partsSales += part.quantity_needed * part.quoted_price_cents
      })
      keys.push("partsSales")
      values.push(partsSales)

      sublets.forEach(sublet => {
        if(sublet.taxable === true){
          const subletS = sublet.price_cents
          const subletT = subletS * subletTaxRateDecimal
          totalTaxes += subletT
          subletSales += subletS + subletT
        }
        else
          subletSales += sublet.price_cents
      })
      keys.push("subletSales")
      values.push(subletSales)
    })

    totalSales = laborSales + partsSales + subletSales + feeTotal - discountTotal
    keys.push("totalSales")
    values.push(totalSales)
    keys.push("taxes")
    values.push(totalTaxes)
  }

  const getPayment = (payments) => {
    var amountPaid = 0
    payments.forEach(payment => {
      if(payment.amount_cents != null)
        amountPaid += payment.amount_cents
    })
    keys.push("amountPaid")
    values.push(amountPaid)
  }

  //Get completed_at in services
  services.forEach((obj) => {
    if(obj.completed_at != null){
      keys.push("completedDate")
      values.push(obj.completed_at)
    }
  })

  //Calculate sales (laborSales, partsSales, subletSales, discountTotal, feeTotal, totalSales)
  calculateSales(services, obj)

  getPayment(payments)

  for(var [key, value] of Object.entries(obj)){
    if(value != null){
      if(Array.isArray(value)){
        //Work on later
        if(key === "services"){
          key = "jobs"
          processJobArray(tableName + "_" + key, value, key, obj.id, obj)
        }
      } else {
        if(key === "id"){
          keys.push(key)
          values.push(value)
        }
        else if(key === "number"){
          keys.push("repairOrderNumber")
          values.push(value)
        }
        else if(key === "shop_id"){
          keys.push("shopId")
          values.push(value)
        }
        else if(key === "status_id"){
          keys.push("repairOrderStatus.id")
          values.push(value)
        }
        else if(key === "label"){
          keys.push("repairOrderLabel.name")
          values.push(obj.label.text)
          keys.push("repairOrderLabel.code")
          values.push(obj.label.text.replace(/\s+/g, '').toUpperCase())
          keys.push("color")
          values.push(obj.label.color_code)
        }
        else if(key === "customer_id"){
          keys.push("customerId")
          values.push(value)
        }
        else if(key === "technician_id"){
          keys.push("technicianId")
          values.push(value)
        }
        else if(key === "vehicle_id"){
          keys.push("vehicleId")
          values.push(value)
        }
        else if(key === "odometer"){
          keys.push("milesIn")
          values.push(value)
        }
        else if(key === "odometer_out"){
          keys.push("milesOut")
          values.push(value)
        }
        else if(key === "detail"){
          keys.push("keyTag")
          values.push(value)
        }
        else if(key === "created_at"){
          keys.push("createdDate")
          values.push(value)
        }
        else if(key === "updated_at"){
          keys.push("updatedDate")
          values.push(value)
        }
      }
    }
  }
  return [keys, values]
}

const getObjectFields = (obj, name, shopId) => {
  if(name === "customers"){
    var tmp = getCustomerFields(obj, name, shopId)
    console.log("Customer Fields")
    console.log(tmp)
    //SQL CODE HERE
  }
  else if (name === "canned_jobs"){
    var tmp = getCannedJobsFields(obj, shopId)
    //SQL CODE HERE
  }
  else if(name ==="appointments"){
    var tmp = getAppointmentFields(obj, shopId)
    //SQL CODE HERE
  }
    else if(name ==="shops"){
    var tmp = getShopFields(obj, shopId)
    //SQL CODE HERE
  }
  else if (name === "vehicles"){
    var tmp = getVehicleFields(obj, shopId)
    //SQL CODE HERE
  }
  else if (name === "repair_orders"){
    var tmp = getRepairOrderFields(obj, name)
    //console.log(tmp)
    //SQL CODE HERE
  }
}

const fetchAllObjects = async (type, tenantId, shopId, retry) => {
  //Call to whatever we are grabbing in a shop
  const res = await api.get("https://api.shop-ware-api-sandbox.com/api/v1/tenants/"+tenantId+"/"+type+"?per_page=1&page=1").then(response => {
    //total number of pages with call
    var pages = response.data.total_pages
    response.data.results.forEach((obj) => {
      //Process the data for each customer
      processObj(obj,type,shopId)
      
    })

    //If there are more than 1 page, we need to recursivly get the data for each page
    /*if(pages > 1){

      //This function is a promise that we will call the API with the given page
      const getAll = async (page, type, shopId, subretry) => {
        return new Promise((resolve, reject) => {
          api.get("https://api.shop-ware-api-sandbox.com/api/v1/tenants/"+tenantId+"/"+type+"?per_page=100&page="+page).then(async response => {
            response.data.results.forEach((obj) => {
              processObj(obj,type,shopId,tenantId)
            })
            resolve()
          }).catch(err => {
            //If timeout, allow to do again, once 5 retries have happened with no succe
            if(subretry < 5) {
              setTimeout(async () => {
                console.log("Retrying getAllObjects : https://api.shop-ware-api-sandbox.com/api/v1/tenants/"+tenantId+"/"+type+"?per_page=100&page="+page)
                await getAll(page, type, shopId, subretry+1)
              }, 1000)
            } else {
              console.log(err)
              reject()
            }
          })
        })
      }

      const startGetAll = async () => {
        //For each page, getAllObjects
        for(var x=1;x<pages;x++)
          await getAll(x, type, shopId, 0)
      }

      //Start the recursion for all pages
      startGetAll()
    }*/
  }).catch(err => {
    if(retry < 5){
      setTimeout(() => {
        console.log("Retrying getAllObjects : https://api.shop-ware-api-sandbox.com/api/v1/tenants/"+tenantId+"/"+type+"?per_page=1&page="+1)
        fetchAllObjects(type, tenantId, shopId, retry+1)
      },1000)
    } else {
      console.log(err)
    }
  })
}

const fetchShopObjects = async (tenantId) => {
  //Get all shops that the tenant has
  const res = await api.get("https://api.shop-ware-api-sandbox.com/api/v1/tenants/"+tenantId+"/shops").then(response => {
    response.data.results.forEach((obj) => {
      //For each shop, fetch their respective categories
      //fetchAllObjects('customers', obj.id, 0) DONE
      fetchAllObjects('shops',tenantId,obj.id,0)
      //fetchAllObjects('canned_jobs', obj.id, 0)
      //fetchAllObjects('vehicles', tenantId, obj.id, 0) 
      fetchAllObjects('repair_orders', tenantId, obj.id, 0) 
      //fetchAllObjects('appointments', obj.id,0) DONE
    })
  }).catch(err => {
    console.log("Error: "+err)
  })
}

const fetchTenants = async () => {
  //API call for all tenants in shopware with our creds
  const res = await api.get("https://api.shop-ware-api-sandbox.com/api/v1/tenants").then(response => {
    response.data.results.forEach((obj) => {
      //For each tenant, fetch their shops
      fetchShopObjects(obj.id)
    })
  }).catch(err => {
    console.log("Error: "+err)
  })
}

fetchTenants()