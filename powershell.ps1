# Variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"
$sku = "Standard_LRS"
$kind = "StorageV2"

# Login to Azure
Connect-AzAccount

# Create Resource Group
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create Storage Account
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -ErrorAction SilentlyContinue
if (-not $storageAccount) {
    $storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName $sku -Kind $kind
}

Write-Output "Storage Account '$storageAccountName' in Resource Group '$resourceGroupName' has been created."